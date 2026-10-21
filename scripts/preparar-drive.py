#!/usr/bin/env python3
"""Prepara los PNG de un post para subirlos a Google Drive.

    python3 scripts/preparar-drive.py <carpeta-png> <DD-MM-AAAA> <tema> [--historia]

Deja en <carpeta-png>/../drive/ una copia ligera de cada lámina (PNG de 128 colores: los diseños
son de colores planos, así que no se nota) con el nombre que va en Drive:

    carrusel:  DD-MM-AAAA_tema_01.png, _02.png, ...
    historias: DD-MM-AAAA_tema_historia-1.png, ...

y un manifiesto.tsv con nombre, bytes y md5 para comprobar la subida.
"""
import hashlib
import sys
from pathlib import Path

from PIL import Image

args = [a for a in sys.argv[1:] if not a.startswith("--")]
if len(args) != 3:
    sys.exit(__doc__)
origen, fecha, tema = Path(args[0]), args[1], args[2]
historia = "--historia" in sys.argv
destino = origen.parent / "drive"
destino.mkdir(exist_ok=True)

filas = []
for i, png in enumerate(sorted(origen.glob("*.png")), start=1):
    sufijo = f"historia-{i}" if historia else f"{i:02d}"
    nombre = f"{fecha}_{tema}_{sufijo}.png"
    salida = destino / nombre
    Image.open(png).convert("RGB").quantize(128, method=Image.Quantize.MEDIANCUT).save(salida, "PNG", optimize=True)
    datos = salida.read_bytes()
    filas.append(f"{nombre}\t{len(datos)}\t{hashlib.md5(datos).hexdigest()}")

manifiesto = destino / "manifiesto.tsv"
previo = manifiesto.read_text().splitlines() if manifiesto.exists() else []
nombres = {f.split("\t")[0] for f in filas}
manifiesto.write_text("\n".join([f for f in previo if f.split("\t")[0] not in nombres] + filas) + "\n")
print("\n".join(filas))
