# loreflorezb_content

Diseño de los posts de Instagram de **@loreflorezb** con sus reglas de creación, su sistema de diseño y su voz.

## Cómo pedir un post

En Claude Code, escribe por ejemplo:

- `/disenar carrusel sobre el cansancio en el servicio, que comenten DESCANSO`
- `/disenar convierte el reel marca/voz/2026-10-07-corazon-ansioso-y-futuro.md en carrusel`
- `/disenar portada para el reel de psicología o fe`

El agente `disenador` deja todo en `posts/AAAA-MM-DD-tema/`:

- `carrusel-png/` y `historias-png/`: las láminas listas para subir (1080 × 1440 y 1080 × 1920).
- `brief.md`: texto lámina por lámina, qué es tuyo y qué propuso, qué variable prueba, el pie de foto, la verificación de las reglas y lo pendiente.
- `laminas.html` y `historias.html`: la fuente del diseño, por si hay que corregir.

Y sube los PNG a Google Drive: `Posts - Carruseles` o `Stories` → `2026` → `octubre` → `21-10-2026_tema_01.png`.

## Estructura

| Carpeta | Qué hay |
|---|---|
| `marca/reglas-de-creacion.md` | Reglas de creación V2: mandan en contenido y estructura |
| `marca/sistema-de-diseno/` | Copia del «Lore Flórez Design System»: manda en lo visual |
| `marca/manual.md`, `marca/manual-de-marca.pdf` | Manual de marca, para lo que el sistema no cubra |
| `marca/voz.md`, `marca/voz/` | Guía de voz y banco de transcripciones de reels |
| `plantillas/` | `marca.css` (importa los tokens del sistema), brief y portada de reel |
| `scripts/render.mjs` | HTML → PNG + revisión automática |
| `scripts/preparar-drive.py`, `scripts/subir-drive.mjs` | Nombres DD-MM-AAAA y subida a Drive |
| `assets/` | Fuentes, ilustraciones, corazones y la referencia «6 flechas» |
| `posts/` | Un post por carpeta. `2026-10-21-maternidad-y-libertad` es el de referencia |

## Renderizar a mano

```bash
npm install            # una vez (Playwright)
cd posts/<carpeta>
node ../../scripts/render.mjs laminas.html
node ../../scripts/render.mjs laminas.html --solo-revisar
```

## Subida a Google Drive

La conexión de Drive de Claude no puede subir imágenes (tendría que copiar cada archivo como texto y se corta). Por eso la subida la hace `scripts/subir-drive.mjs` directamente contra la API de Drive, con una credencial OAuth de tu cuenta. Se configura una vez:

1. En Google Cloud Console, crea un proyecto, activa **Google Drive API** y en «Pantalla de consentimiento de OAuth» déjala **En producción** (en modo prueba el permiso caduca a los 7 días).
2. Crea un **ID de cliente OAuth** de tipo «Aplicación web» con `https://developers.google.com/oauthplayground` como URI de redirección.
3. En el [OAuth Playground](https://developers.google.com/oauthplayground), en el engranaje marca «Use your own OAuth credentials» y pega el ID y el secreto. Autoriza el permiso `https://www.googleapis.com/auth/drive` con tu cuenta y cambia el código por un **refresh token**.
4. En la configuración del entorno de Claude Code (menú del entorno → Editar → secretos o variables de entorno) guarda `GDRIVE_CLIENT_ID`, `GDRIVE_CLIENT_SECRET` y `GDRIVE_REFRESH_TOKEN`. Nunca los pegues en el chat ni en el repositorio. Una sesión nueva los toma.

Sin esas variables, el agente deja los archivos listos en `posts/<carpeta>/drive/` con su nombre final y te avisa.
