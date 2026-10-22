# Contenido de @loreflorezb

Repositorio de diseño de los posts de Instagram de Lore Flórez B, psicóloga y consejera bíblica.

- Para diseñar cualquier post usa la skill `disenar`, que despacha al agente `disenador` (`.claude/agents/disenador.md`).
- Qué manda sobre qué:
  1. `marca/reglas-de-creacion.md` (V2): contenido, voz, teología, ética, estructura (carrusel de máx. 10 láminas), copy, CTA e historias.
  2. `marca/sistema-de-diseno/`: todo lo visual (copia del artifact «Lore Flórez Design System», https://claude.ai/artifact/6rQFxeDygdo1JRDxiVHDiN).
  3. `marca/manual.md` y `marca/manual-de-marca.pdf`: lo que el sistema de diseño no cubra.
  4. `marca/voz.md` y el banco de voz `marca/voz/`: el oído de Lore.
- Las piezas se construyen en HTML con `plantillas/marca.css` (importa los tokens del sistema de diseño) y se renderizan con `node scripts/render.mjs <archivo.html>`, que además revisa las reglas.
- Cada post va en `posts/AAAA-MM-DD-tema/` con `brief.md`, `laminas.html`, `historias.html`, `carrusel-png/` e `historias-png/`.
- Drive: `scripts/preparar-drive.py` + `scripts/subir-drive.mjs` dejan cada archivo en `Posts - Carruseles` o `Stories` → `AAAA` → `mes`, con el nombre `DD-MM-AAAA_tema_NN.png`. Necesita `GDRIVE_CLIENT_ID`, `GDRIVE_CLIENT_SECRET` y `GDRIVE_REFRESH_TOKEN` en el entorno. No se suben imágenes con las herramientas MCP de Drive (el base64 se corta).
- Programación: solo cuando Lore aprueba una pieza definitivamente, con la skill `programar` → calendario de Notion «Planificador para redes sociales», Zernio (skill `publicar`) y el artifact «Calendario de Lore» (https://claude.ai/artifact/XBvMKTGYnAQQ8FBpMbotdc).
- No se inventan recursos: si falta algo, se pregunta.
- Todo en español, siempre de tú.
