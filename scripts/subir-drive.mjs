#!/usr/bin/env node
// Sube a Google Drive los archivos que dejó scripts/preparar-drive.py.
//
//   node scripts/subir-drive.mjs posts/<carpeta>/drive carrusel
//   node scripts/subir-drive.mjs posts/<carpeta>/drive historias
//
// Destino: <Posts - Carruseles | Stories>/<AAAA>/<mes>/, tomando año y mes del nombre DD-MM-AAAA_tema.
// Crea las carpetas de año y mes si no existen. Si un archivo con el mismo nombre ya está, lo reemplaza.
// Comprueba el md5 de cada subida contra manifiesto.tsv.
//
// Necesita en el entorno (nunca en el repo ni en el chat):
//   GDRIVE_CLIENT_ID, GDRIVE_CLIENT_SECRET, GDRIVE_REFRESH_TOKEN  (OAuth de la cuenta de Lore, permiso «drive»)
// Usa curl para respetar el proxy del entorno.

import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const RAICES = {
  carrusel: "1ud2q4pTJWVKk4ZwemAij47lg_OBwg5NA", // Posts - Carruseles
  historias: "1enie1rh61D2rvu2Ih_RnsAUREvxC_jQj", // Stories
};
const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const CARPETA = "application/vnd.google-apps.folder";

const [dir, tipo] = process.argv.slice(2);
if (!dir || !RAICES[tipo]) {
  console.error("Uso: node scripts/subir-drive.mjs <carpeta drive/> carrusel|historias");
  process.exit(2);
}
const faltan = ["GDRIVE_CLIENT_ID", "GDRIVE_CLIENT_SECRET", "GDRIVE_REFRESH_TOKEN"].filter((v) => !process.env[v]);
if (faltan.length) {
  console.error(`Falta la credencial de Drive en el entorno: ${faltan.join(", ")}. Ver README, sección «Subida a Google Drive».`);
  process.exit(3);
}

const curl = (args) => JSON.parse(execFileSync("curl", ["-sS", "--fail-with-body", ...args], { maxBuffer: 64 * 1024 * 1024 }).toString());

const { access_token: token } = curl([
  "-X", "POST", "https://oauth2.googleapis.com/token",
  "--data-urlencode", `client_id=${process.env.GDRIVE_CLIENT_ID}`,
  "--data-urlencode", `client_secret=${process.env.GDRIVE_CLIENT_SECRET}`,
  "--data-urlencode", `refresh_token=${process.env.GDRIVE_REFRESH_TOKEN}`,
  "--data-urlencode", "grant_type=refresh_token",
]);
const auth = ["-H", `Authorization: Bearer ${token}`];

function buscar(nombre, padre, mime) {
  const q = `name = '${nombre.replace(/'/g, "\\'")}' and '${padre}' in parents and trashed = false` + (mime ? ` and mimeType = '${mime}'` : "");
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)&supportsAllDrives=true&includeItemsFromAllDrives=true`;
  return curl([...auth, url]).files[0];
}

function carpeta(nombre, padre) {
  const hay = buscar(nombre, padre, CARPETA);
  if (hay) return hay.id;
  const nueva = curl([...auth, "-X", "POST", "-H", "Content-Type: application/json",
    "--data", JSON.stringify({ name: nombre, mimeType: CARPETA, parents: [padre] }),
    "https://www.googleapis.com/drive/v3/files?supportsAllDrives=true&fields=id"]);
  console.log(`  + carpeta ${nombre}`);
  return nueva.id;
}

const ruta = resolve(dir);
const manifiesto = Object.fromEntries(
  readFileSync(join(ruta, "manifiesto.tsv"), "utf8").trim().split("\n").map((l) => { const [n, , md5] = l.split("\t"); return [n, md5]; }),
);
const sufijo = tipo === "historias" ? /_historia-\d+\.png$/ : /_\d{2}\.png$/;
const archivos = readdirSync(ruta).filter((f) => sufijo.test(f)).sort();
if (!archivos.length) {
  console.error(`No hay archivos de ${tipo} en ${ruta}. Corre antes scripts/preparar-drive.py.`);
  process.exit(2);
}

let fallos = 0;
for (const nombre of archivos) {
  const m = nombre.match(/^(\d{2})-(\d{2})-(\d{4})_/);
  if (!m) { console.error(`✗ ${nombre}: no empieza por DD-MM-AAAA_`); fallos++; continue; }
  const destino = carpeta(MESES[Number(m[2]) - 1], carpeta(m[3], RAICES[tipo]));
  const previo = buscar(nombre, destino);
  const meta = JSON.stringify(previo ? { name: nombre } : { name: nombre, parents: [destino] });
  const url = previo
    ? `https://www.googleapis.com/upload/drive/v3/files/${previo.id}?uploadType=multipart&supportsAllDrives=true&fields=id,md5Checksum,webViewLink`
    : "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id,md5Checksum,webViewLink";
  const r = curl([...auth, "-X", previo ? "PATCH" : "POST",
    "-F", `metadata=${meta};type=application/json;charset=UTF-8`,
    "-F", `file=@${join(ruta, nombre)};type=image/png`, url]);
  const ok = r.md5Checksum === manifiesto[nombre];
  if (!ok) fallos++;
  console.log(`${ok ? "✓" : "✗"} ${nombre}${previo ? " (reemplazado)" : ""} ${r.webViewLink}${ok ? "" : " — el md5 no coincide"}`);
}
process.exit(fallos ? 1 : 0);
