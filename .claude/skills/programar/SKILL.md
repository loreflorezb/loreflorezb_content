---
name: programar
description: Programa un post de @loreflorezb ya aprobado definitivamente por Lore. Lo registra en el calendario de Notion «Planificador para redes sociales», lo programa en Zernio y lo deja en el artifact «Calendario de Lore». Úsala solo cuando Lore diga que una pieza está aprobada («aprobado», «listo, prográmalo», «ya puedes publicarlo»). Nunca por iniciativa propia ni con piezas en revisión.
---

# Programar un post aprobado

Destinos (fijos):

| Qué | Dónde |
|---|---|
| Calendario de Notion | «Planificador para redes sociales». Data source `collection://1b2d086a-27ba-80e9-9cd7-000b68434fcd` (https://app.notion.com/p/1b2d086a27ba806e944dc7c99fc27909) |
| Artifact | «Calendario de Lore», https://claude.ai/artifact/XBvMKTGYnAQQ8FBpMbotdc, colección `posts` de su base de datos |
| Publicación real | Zernio, con la skill `publicar` |

## 0. Antes de tocar nada

1. **Aprobación explícita y definitiva** de Lore para *esta* pieza, en este chat. «Me gusta» o «casi» no cuenta. Si dudas, pregunta.
2. La pieza está terminada: `render.mjs` sin errores, sin ilustraciones `pendiente`, sin textos «propuestos» ni versículos «por verificar» abiertos en `brief.md`. Si queda algo, dilo y para.
3. **Día, hora y redes, confirmados por Lore.** Para sugerir la hora, lee `meta/estado` del artifact (`horasSugeridas`, hora de Bogotá, calculadas con su interacción real) y propón la del día de la semana. Si no hay dato, 4:00 p. m. (reglas §17). Redes por defecto: Instagram; pregunta si va también a TikTok o Facebook.

## 1. Notion

1. Busca si ya hay algo ese día:
   ```sql
   SELECT url, "Nombre de la publicación", "Estado", "date:Fecha de la publicación:start"
   FROM "collection://1b2d086a-27ba-80e9-9cd7-000b68434fcd"
   WHERE "date:Fecha de la publicación:start" LIKE ?        -- params: ["AAAA-MM-DD%"]
   ```
   Si hay una entrada ese día, **pregunta** si se edita esa o se crea una nueva (reglas §21). Nunca crees una nueva por defecto.
2. Crea (o actualiza) la página en ese data source:
   - `Nombre de la publicación`: «Carrusel: tema» (o «Post», «Portada de reel», según el formato).
   - `Estado`: «Aprobada».
   - `date:Fecha de la publicación:start`: `AAAA-MM-DDTHH:MM:00-05:00`, con `is_datetime` = 1.
   - `Plataforma`: las redes confirmadas.
   - `COPY`: el pie de foto del brief, tal cual, sin espacios ni saltos dobles sin propósito.
   - `Contenido`: el texto lámina por lámina («1. …», «2. …») y, debajo, las 3 historias.
3. Guarda el id de la página (32 caracteres, sin guiones): es el id del post en el artifact.

## 2. Zernio

Usa la skill `publicar` para programar la pieza a la hora confirmada, con los PNG de `posts/<carpeta>/carrusel-png/` en orden y el COPY. Necesitas de vuelta el `zernioPostId` (uno por red).

Las 3 historias **no** se programan solas: el sticker de enlace a la publicación solo se pone desde Instagram. Quedan en Drive (`Stories/AAAA/mes`) y como «faltante» en el artifact, salvo que Lore pida otra cosa.

Cuando Zernio confirme, pasa la página de Notion a `Estado` «Programada».

## 3. Artifact

Lee primero `posts/<id>` con `ArtifactData` (`get`). Si existe, haz `update` con su `version` como `if_version`; si no, `set`. El documento sigue la forma de los demás carruseles del calendario:

```json
{
  "id": "<id de Notion sin guiones>",
  "titulo": "<Nombre de la publicación>",
  "tipo": "Carrusel",
  "fecha": "AAAA-MM-DD",
  "hora": "HH:MM",
  "horaSugerida": "<la de meta/estado para ese día>",
  "plataformas": ["Instagram"],
  "estadoNotion": "Programada",
  "notionUrl": "https://app.notion.com/<id>",
  "medios": { "tipo": "imagenes", "cantidad": 10, "nombre": "10 láminas 3:4 · DD-MM-AAAA_tema", "url": "<carpeta de Drive del mes, si se subió>" },
  "publicacion": { "estado": "programada", "cuando": "<fecha y hora programadas en UTC, ISO>", "zernioPostId": "<id>", "detalle": "Programada en Zernio para el <día> a las <hora> (hora de Bogotá)." },
  "faltantes": ["Publicar a mano las 3 historias con el sticker de enlace al carrusel."],
  "notas": "",
  "semaforoAuto": "verde",
  "semaforoManual": null,
  "tentativo": false,
  "subidaManual": false,
  "actualizado": "<ahora, ISO UTC>"
}
```

Si los PNG no están en Drive (falta la credencial de `subir-drive.mjs`), pon `"url": null` y agrega «Subir los PNG a Drive» a `faltantes`. No toques `meta/`, `notificaciones/` ni `instrucciones/`, ni dispares automatizaciones del artifact.

## 4. Cierra

Dile a Lore, corto: día y hora (Bogotá), redes, enlace de Notion, enlace del artifact y qué queda a mano (historias, Drive). Marca el brief del post como programado (fecha, hora, enlaces).
