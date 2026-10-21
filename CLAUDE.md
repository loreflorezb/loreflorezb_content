# Contenido de @loreflorezb

Repositorio de diseño de los posts de Instagram de Lore Flórez B, psicóloga cristiana.

- Para diseñar cualquier post usa la skill `disenar`, que despacha al agente `disenador` (`.claude/agents/disenador.md`).
- La marca vive en `marca/`: `manual.md` (sistema visual), `voz.md` (cómo habla Lore), `guiones/` (reels reales), `manual-de-marca.pdf` (fuente original; manda sobre el `.md`).
- Las piezas se construyen en HTML con `plantillas/marca.css` y se renderizan con `node scripts/render.mjs <laminas.html>`, que además revisa la lista del manual.
- Cada post va en `posts/AAAA-MM-DD-slug/` con `brief.md`, `laminas.html` y `png/`.
- Recursos de marca en `assets/` (fuentes, ilustraciones). No se inventan recursos: si falta algo, se pregunta.
- Todo en español, siempre de tú.
