#!/usr/bin/env node
// Renderiza cada .lamina de un HTML a PNG y revisa la pieza contra el manual (sección 12).
//
//   node scripts/render.mjs posts/2026-10-21-mi-post/laminas.html
//   node scripts/render.mjs posts/.../laminas.html --solo-revisar
//
// Sale con código 1 si hay errores. Las advertencias no bloquean, pero se reportan a Lore.

import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const args = process.argv.slice(2);
const archivo = args.find((a) => !a.startsWith("--"));
const soloRevisar = args.includes("--solo-revisar");
if (!archivo) {
  console.error("Uso: node scripts/render.mjs <laminas.html> [--solo-revisar]");
  process.exit(2);
}

async function cargarPlaywright() {
  try {
    return await import("playwright");
  } catch {
    const globalRoot = execSync("npm root -g").toString().trim();
    return createRequire(join(globalRoot, "noop.js"))("playwright");
  }
}

// [04] Paleta completa. Cualquier otro color es un error.
const PALETA = new Set([
  "#FFF4F5", "#FFE4E9", "#F9B5C2", "#EB8BA4", "#B83B5C", "#870050", "#66123E", "#611439",
  "#69224B", "#FDFAF3", "#EBD2D4", "#272727", "#FD9A71", "#FFCAC9", "#FDBBAB", "#F6F1E2",
  "#840021", "#B0595E", "#C18B8A", "#9A5946", "#88836F", "#9D7D9C", "#FEFBEA", "#8B2049",
  "#E98BB3", "#FF6FB0", "#E8B1A1", "#E5865C", "#A13E23",
]);

// [02] Frases prohibidas
const PROHIBIDAS = [
  "mundo acelerado", "sumergirnos", "cambia el juego", "desbloquea", "eleva tu energía",
  "respuesta dentro de ti", "tú te transformas", "tu te transformas", "agenda ya",
];

const { chromium } = await cargarPlaywright();
const ruta = resolve(archivo);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 2000 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(ruta).href, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  await Promise.all(['150px "Anton"', '36px "Poppins"', '50px "LoreFloresFont"'].map((f) => document.fonts.load(f).catch(() => null)));
  await document.fonts.ready;
});

const hexEnArchivo = (await page.content()).match(/#[0-9a-fA-F]{6}\b/g) ?? [];

const informe = await page.evaluate(({ prohibidas }) => {
  const errores = [];
  const avisos = [];
  const laminas = [...document.querySelectorAll(".lamina")];
  const esReel = laminas.some((l) => l.classList.contains("formato-reel"));

  if (!document.fonts.check('50px "LoreFloresFont"') || ![...document.fonts].some((f) => f.family.replace(/"/g, "") === "LoreFloresFont" && f.status === "loaded")) {
    if (document.querySelector(".mano")) avisos.push("LoreFloresFont no está en assets/fonts/: la letra a mano salió con una fuente de respaldo. No publicar así.");
  }
  for (const familia of ["Anton", "Poppins"]) {
    if (!document.fonts.check(`36px "${familia}"`)) errores.push(`No cargó la fuente ${familia} (¿sin conexión a Google Fonts?).`);
  }

  if (!esReel && laminas.length > 1 && (laminas.length < 10 || laminas.length > 12)) {
    avisos.push(`El carrusel tiene ${laminas.length} láminas; el manual pide de 10 a 12.`);
  }

  let corales = document.querySelectorAll(".coral, .palabra-coral").length;
  if (corales > 1) errores.push(`El coral aparece ${corales} veces; va una sola vez por pieza.`);

  const emoji = /\p{Extended_Pictographic}/u;
  const fondos = ["fondo-rubor", "fondo-salmon", "fondo-papel"];

  laminas.forEach((l, i) => {
    const n = `Lámina ${i + 1}`;
    const texto = l.innerText;
    const cuenta = (sel) => l.querySelectorAll(sel).length;

    if (!fondos.some((f) => l.classList.contains(f))) errores.push(`${n}: sin fondo aprobado (rubor, salmón o papel).`);
    if (cuenta(".meta.arriba") !== 1 || cuenta(".meta.abajo") + cuenta(".firma") < 1) errores.push(`${n}: falta la fila meta arriba y abajo (o la firma).`);
    if (cuenta(".versiculo") > 1) errores.push(`${n}: más de un versículo.`);
    if (cuenta(".mano") > 1) errores.push(`${n}: más de una frase a mano.`);
    if (cuenta(".ilustracion") > 1) errores.push(`${n}: más de una ilustración.`);
    if (cuenta(".ilustracion.pendiente")) avisos.push(`${n}: ilustración pendiente (hueco reservado).`);
    const estrellas = cuenta(".estrella");
    if (estrellas && (estrellas < 2 || estrellas > 3)) errores.push(`${n}: ${estrellas} estrellas; van 2 o 3.`);
    if (/[¡!]/.test(texto)) errores.push(`${n}: tiene signos de exclamación.`);
    if (emoji.test(texto)) errores.push(`${n}: tiene emoji.`);
    if (/\busted(es)?\b/i.test(texto)) errores.push(`${n}: usa «usted»; siempre tú.`);
    for (const p of prohibidas) if (texto.toLowerCase().includes(p)) errores.push(`${n}: frase prohibida «${p}».`);

    l.querySelectorAll(".resaltado").forEach((r) => {
      const palabras = r.innerText.trim().split(/\s+/).length;
      if (palabras > 2) errores.push(`${n}: el resaltador cubre ${palabras} palabras; máximo 2.`);
    });

    l.querySelectorAll(".titulo").forEach((t) => {
      const lineas = t.querySelectorAll(".linea");
      const palabras = [...lineas].map((x) => x.innerText).join(" ").trim().split(/\s+/).length;
      if (lineas.length > 2) errores.push(`${n}: título de ${lineas.length} líneas; máximo 2.`);
      if (palabras < 2 || palabras > 5) avisos.push(`${n}: título de ${palabras} palabras; el manual pide 2 a 5.`);
    });

    // Texto fuera del área útil (márgenes de 90 px; en reels, la zona segura y el recorte 3:4)
    const caja = l.getBoundingClientRect();
    const lim = l.classList.contains("formato-reel")
      ? { top: 250, bottom: 420, left: 90, right: 120 }
      : { top: 90, bottom: 90, left: 90, right: 90 };
    l.querySelectorAll(".titulo .linea, .cuerpo, .mano, .versiculo, .burbuja, .etiqueta, .pasos").forEach((el) => {
      const r = el.getBoundingClientRect();
      const fuera =
        r.left - caja.left < lim.left - 6 || caja.right - r.right < lim.right - 6 ||
        r.top - caja.top < lim.top - 6 || caja.bottom - r.bottom < lim.bottom - 6;
      if (fuera) errores.push(`${n}: «${el.innerText.slice(0, 40).replace(/\s+/g, " ")}…» se sale de los márgenes.`);
      if (el.scrollWidth > el.clientWidth + 2) errores.push(`${n}: «${el.innerText.slice(0, 40).replace(/\s+/g, " ")}…» desborda su caja.`);
    });

    // El texto nunca va detrás (ni encima) de la ilustración
    const ilus = l.querySelector(".ilustracion");
    if (ilus) {
      const a = ilus.getBoundingClientRect();
      l.querySelectorAll(".titulo, .cuerpo, .mano, .versiculo, .burbuja, .etiqueta, .pasos").forEach((el) => {
        const b = el.getBoundingClientRect();
        const choca = b.left < a.right && b.right > a.left && b.top < a.bottom && b.bottom > a.top;
        if (choca) errores.push(`${n}: el texto se monta sobre la ilustración.`);
      });
    }

    const estilo = getComputedStyle(l).backgroundImage;
    if (estilo && estilo !== "none") errores.push(`${n}: el fondo no es plano.`);
  });

  if (/gradient\(|blur\(/i.test(document.documentElement.outerHTML)) {
    errores.push("Hay degradados o desenfoques en la pieza.");
  }

  return { errores, avisos, total: laminas.length };
}, { prohibidas: PROHIBIDAS });

for (const hex of new Set(hexEnArchivo.map((h) => h.toUpperCase()))) {
  if (!PALETA.has(hex)) informe.errores.push(`Color fuera de la paleta: ${hex}.`);
}

if (!soloRevisar) {
  const salida = join(dirname(ruta), "png");
  rmSync(salida, { recursive: true, force: true });
  mkdirSync(salida, { recursive: true });
  const laminas = await page.$$(".lamina");
  for (const [i, l] of laminas.entries()) {
    const nombre = join(salida, `${String(i + 1).padStart(2, "0")}.png`);
    await l.screenshot({ path: nombre });
  }
  console.log(`✓ ${laminas.length} PNG en ${salida}`);
}

await browser.close();

console.log(`\nRevisión contra el manual (${informe.total} láminas)`);
if (!informe.errores.length && !informe.avisos.length) console.log("  Todo en orden.");
for (const e of [...new Set(informe.errores)]) console.log(`  ✗ ${e}`);
for (const a of [...new Set(informe.avisos)]) console.log(`  ⚠ ${a}`);
process.exit(informe.errores.length ? 1 : 0);
