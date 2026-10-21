# loreflorezb_content

Diseño de los posts de Instagram de **@loreflorezb** con su manual de marca y su voz.

## Cómo pedir un post

En Claude Code, escribe por ejemplo:

- `/disenar carrusel sobre el cansancio en el servicio, invitación a comentar DESCANSO`
- `/disenar convierte el guion marca/guiones/2026-10-07-corazon-ansioso-y-futuro.md en carrusel`
- `/disenar portada para el reel de psicología o fe`

El agente `disenador` deja todo en `posts/AAAA-MM-DD-slug/`:

- `png/`: las láminas listas para subir (1080 × 1440 o 1080 × 1920).
- `brief.md`: texto lámina por lámina, qué es tuyo y qué propuso, el pie de foto y lo pendiente.
- `laminas.html`: la fuente del diseño, por si hay que corregir.

## Estructura

| Carpeta | Qué hay |
|---|---|
| `marca/` | Manual (PDF y texto), guía de voz y guiones de referencia |
| `plantillas/` | `marca.css` (el sistema visual), brief y portada de reel |
| `scripts/render.mjs` | HTML → PNG + revisión automática contra el manual |
| `assets/` | Fuentes e ilustraciones de la marca |
| `posts/` | Un post por carpeta. `2026-10-21-maternidad-y-libertad` es el de referencia |

## Renderizar a mano

```bash
npm install            # una vez (Playwright)
node scripts/render.mjs posts/<carpeta>/laminas.html
node scripts/render.mjs posts/<carpeta>/laminas.html --solo-revisar
```

## Falta para que quede al 100 %

- `assets/fonts/LoreFloresFont.(woff2|otf|ttf)`: sin ella, la letra a mano sale con una fuente de respaldo y el revisor lo avisa.
- `assets/illustrations/`: las ilustraciones de la marca (personajes, corazones con cara, recortes vintage). El agente no inventa ilustraciones; deja el hueco descrito.
