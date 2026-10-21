---
name: disenar
description: Diseña un post de Instagram para @loreflorezb con sus reglas de creación, su sistema de diseño y su voz, y lo sube a su Google Drive. Úsala cuando Lore diga "diseña un post", "hazme un carrusel", "convierte este reel/guion en carrusel", "haz la portada del reel", "diseña una historia" o pase un tema, un texto o un guion para Instagram.
---

# Diseñar un post de @loreflorezb

Este trabajo lo hace el agente `disenador` (`.claude/agents/disenador.md`). Tú solo armas el encargo y le pasas la posta.

1. Reúne del mensaje de Lore (pregunta solo lo que falte y no se pueda deducir):
   - **Formato:** carrusel (por defecto, con sus 3 historias), post único, portada de reel o historias sueltas.
   - **Fuente del texto:** texto final ya escrito (se maqueta sin reescribir), guion o reel (ruta o texto pegado), o solo un tema.
   - **Fecha de publicación:** si no la da, la de hoy. Define el nombre (`DD-MM-AAAA_tema`) y la carpeta de Drive (año y mes).
   - **Tipo de pieza:** educativa con puente o de conversión (reglas §8.1).
   - **Serie:** nombre corto para la fila meta, si es parte de una serie.
   - **Cierre:** «Comenta [PALABRA]» (¿hay guía para esa palabra?), pregunta abierta o CTA directo.
2. Despacha el agente `disenador` con todo eso en el prompt (incluye el texto o guion completo si Lore lo pegó en el chat).
3. Cuando vuelva, muéstrale a Lore los PNG (envíalos) y su resumen: qué es texto de ella, qué es propuesto, qué variable prueba, enlaces de Drive y qué queda pendiente.
4. Si Lore pide cambios, vuelve a despachar al agente con los cambios y la ruta de la carpeta.
5. Si Lore aprueba, pregúntale si se agenda en el calendario de Notion (reglas §21). Para programar en redes, usa la skill `publicar`.
