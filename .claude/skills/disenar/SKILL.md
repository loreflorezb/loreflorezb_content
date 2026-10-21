---
name: disenar
description: Diseña un post de Instagram para @loreflorezb con su manual de marca y su voz. Úsala cuando Lore diga "diseña un post", "hazme un carrusel", "convierte este reel/guion en carrusel", "haz la portada del reel", "diseña una historia" o pase un tema, un texto o un guion para Instagram.
---

# Diseñar un post de @loreflorezb

Este trabajo lo hace el agente `disenador` (`.claude/agents/disenador.md`). Tú solo armas el encargo y le pasas la posta.

1. Reúne del mensaje de Lore (pregunta solo lo que falte y no se pueda deducir):
   - **Formato:** carrusel (por defecto), post único, portada de reel o historia.
   - **Fuente del texto:** texto final ya escrito (se maqueta sin reescribir), guion o reel (ruta o texto pegado), o solo un tema.
   - **Serie:** nombre corto para la fila meta, si es parte de una serie.
   - **Invitación:** comentar una palabra («Comenta [PALABRA]») o agendar en el enlace del perfil.
   - **Ilustraciones:** si ya hay archivos en `assets/illustrations/` para este post.
2. Despacha el agente `disenador` con todo eso en el prompt (incluye el texto o guion completo si Lore lo pegó en el chat).
3. Cuando vuelva, muéstrale a Lore los PNG (envíalos o enlázalos) y su resumen: qué es texto de ella, qué es propuesto y qué queda pendiente.
4. Si Lore pide cambios, vuelve a despachar al agente con los cambios y la ruta de la carpeta.

Para subir o programar lo diseñado, usa la skill `publicar`.
