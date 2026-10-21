# Lore Flórez — Design System

## The brand

**Lore Flórez B (@loreflorezb)** is a Colombian Christian psychologist who publishes on
Instagram and works with churches, pastors and leadership teams. The practice is a small
team — the closing pages read "Psicólogas y Psiquiatra Cristiana" and "nuestro equipo de
psicólogos cristianos" — and clients book through the link in the Instagram bio.

The work sits at the intersection of clinical psychology and Christ-centred faith: emotional
pain, church culture, grief, service motivation, leadership vulnerability. The output is not
software. It is **content**: downloadable A4 guides used as lead magnets, and Instagram
carousels that teach one idea and route to a booking link.

### Sources given

| Source | What it is |
|---|---|
| `uploads/GUÍA.pdf` | "CONVERSACIONES QUE SANAN CULTURAS" — 8-page A4 guide for church leadership teams. Five discussion chapters + closing CTA. Made in Canva. |
| `uploads/GUÍAS LF.pdf` | "SALMO 121 · GUÍA PRÁCTICA" — 4-page A4 guide on accompanying someone through suffering. Made in Canva. |
| `uploads/contrato-de-voz-lore-florez.md` | Voice contract for Reel scripts: identity, tone, banned phrases, hook formats, CTA rules, three before/after rewrites. **The authority on copy.** |
| `uploads/loreflorezb-playbook-contenido.md` | 90-day Instagram performance playbook: cadence, winning carousel structure, three validated hook formulas, content pillars, hook bank. |
| https://www.loreflorezb.com/ | WordPress site (2021, "Lorena Florez – Terapia Online"). Nav: Home · Servicios · Reto · Talleres. Read as text only. |
| https://www.instagram.com/loreflorezb/ | Main channel. **Not accessible** from here (login wall). |

No codebase or Figma file was provided. Colours, fonts and illustrations come from the two
PDFs; voice and content structure from the two markdown documents.

**Logo.** The website shows a logo image (`Logo-tag-Lore-Florez-B`, square 300×300 and wide
370×208) but it could not be downloaded into this project, so none ships here. Until the
file is supplied, use the `Signature` component (`@loreflorezb · Psicóloga cristiana`)
wherever a mark would go. Do not draw one. When you have the PNG/SVG, place it at
`assets/logo/`.

**Website vs. current brand.** The 2021 site predates the current positioning: it speaks to
women about self-esteem and "amor propio", uses exclamations ("¡Ánimo, no estás sola!") and
emoji in the chat widget, and has a generic theme's yellow/blue dot decorations. The PDFs
and the voice contract (Christ-centred, team of psychologists and psychiatrist, no
self-generated transformation) supersede it. Treat the site as history, not reference.

### Surfaces (products)

1. **Printable guides** — A4 portrait, 596×842pt, 4–8 pages, given away as PDFs.
   → `ui_kits/guides/`
2. **Instagram carousels** — **1080×1440 (3:4)** slides, 10–12 per post, run as numbered
   series ("SERIE 1/7"). Reference: the 12-slide "Las 6 flechas que inflaman el corazón"
   (`uploads/1–12.png`, downscaled copies in `assets/carousel-reference/`).
   → `ui_kits/instagram/`

---

## Content fundamentals

The full rules live in `uploads/contrato-de-voz-lore-florez.md`. Summary:

**Who she talks to.** One person sitting across from her, not a room. Conversation, not
lecture.

**Language.** Neutral Latin-American Spanish with natural Colombian touches, readable across
35+ countries. Always **tú**, never usted: "Te invito a leer el salmo completo en tu Biblia
antes de seguir." **Yo** when personal ("Así uso el Salmo 121…"). **Nosotros** for the team
("Somos un equipo de psicólogos y psiquiatra cristianos") and for the reader's community in
the church guides ("¿Qué mensaje estamos dando sobre el dolor…?").

**Register.** "As simple as the topic allows, as precise as the topic demands." Clinical,
doctrinal or exegetical passages may rise to professional vocabulary without turning cold.

**Three words:** warm-but-direct, doctrinally firm, professionally simple. Not a preacher, not
hype, not secular-motivational, not mindfulness, not humanist.

**Theology is load-bearing in the copy.** Transformation is received from the Holy Spirit,
never self-generated. Psychology and faith are always integrated in the same piece, never
presented separately. Promise understanding ("entender qué pasa por dentro"), never instant
healing.

**Words she uses:** corazón, sanar, identidad en Cristo, acompañar, cristocéntrico, "el
Espíritu Santo transforma". Observable behavioural descriptors instead of "siento / no siento".

**Banned:** "En el mundo acelerado de hoy…", "Vamos a sumergirnos", "cambia el juego",
"desbloquea", "eleva tu potencial / tu energía", "encuentra la respuesta dentro de ti",
"tú te transformas", excess emoji or exclamation marks.

**Concrete, not abstract.** Pain is shown with lived examples — consulting-room situations,
conversations with colleagues, comments from followers: "Se ve como alguien que sigue
trabajando, cuidando a otros, sonriendo, sirviendo y cumpliendo con todo… mientras por
dentro lleva meses o incluso años intentando sobrevivir a lo que vivió."

**Hooks** are short, direct and rotated: direct question, denial of expectation ("Tu
ansiedad no es falta de fe"), "así uso yo…", a biblical figure as model ("Jesús también se
alejó. También dijo no."), a patient's confession. Playbook formulas: (1) guilt relief "Tu X
no es falta de fe", (2) "¿Te suena familiar?" + three failures, (3) "La iglesia te enseñó…
pero nadie te explicó".

**CTAs vary by piece:** name the team, stress the Christ-centred approach, or list
specialities (depresión, ansiedad, heridas emocionales, duelo, trauma, abuso, adicciones,
propósito, autoestima…) and patient types (niños desde 7 años virtual, mujeres, hombres,
parejas). Closing line: "Puedes conocer nuestros servicios y agendar en el enlace de nuestro
perfil." Lead magnets use "Comenta [PALABRA]" (MAÑANA, IDENTIDAD, SANIDAD, BIBLIA, VALLE)
+ a free guide sent by DM.

**The dominant grammatical form is the question.** Whole pages are lists of open questions,
never answers. They are long, specific and uncomfortable on purpose: "¿Cuándo fue la última
vez que alguien manifestó su inconformidad con una decisión del liderazgo y cuál fue la
reacción?" Questions carry both `¿` and `?`. Rhetorical padding is absent.

**Tone.** Direct, warm, clinically calm, never chirpy. It names hard things plainly and
refuses to resolve them for the reader: "No hay respuestas correctas. El objetivo no es
resolver, es ver." It repeatedly grants permission — "Tienes libertad de confesar que estás
agobiado. Eso no es falta de fe." Reassurance always arrives as a fact, not as cheerleading.

**Sentence shape.** Short declaratives, often in pairs where the second sentence turns the
first: "Una comunidad sana no esconde el dolor. Lo sostiene." / "La lealtad que nace del
miedo no es lealtad. Es supervivencia." One such pair per page, used as the thesis. No
exclamation marks. Em dashes appear sparingly, for a mid-sentence aside.

**Scripture is quoted, never paraphrased**, in quotation marks with a Spanish reference set
after it (Reina-Valera and NTV wordings both appear): "«Mi gracia es todo lo que
necesitas…» 2 Corintios 12:9-10". Exactly one verse per chapter or slide.

**Casing.** Headlines and eyebrow labels are ALL CAPS ("EL SERVICIO Y LA MOTIVACIÓN",
"PREGUNTAS PARA ABRIR LA CONVERSACIÓN:"). Everything else is sentence case. Labels end in a
colon. Titles are 2–5 words. Carousel covers: **2 lines, uppercase, present-tense verb**,
readable in 1.5 s and screenshot-worthy.

**Carousel structure (10–12 slides):** 1 hook (question or guilt denial) → 2–4 the
psychological problem → 5–7 neuro explanation + biblical truth → 8–9 a 3–4 step protocol →
10 self-assessment → 11 CTA with keyword. Before the ask, a soft "Si te identificaste, sigue
leyendo, esto es para ti."

**Structure of a piece.** Promise → how to use it → chapters of questions → a reflection
line → a prayer or closing scripture → an invitation to book. The CTA is soft and never a
button: "Psicólogas y Psiquiatra Cristiana · Link en bio."

**Emoji.** None in designed pieces (guides, slides) — bullets are heart images. In captions
and scripts, at most one 🤍 as a soft transition before the CTA (as in the contract's
example 2). Never strings of emoji. Other marks: `·`, `…`, `«»`/`""` and `—`.

---

## Visual foundations

**Palette.** One hue family — pink — carried from a near-white blush wash (`#fff4f5`) up
through the working pinks (`#ffb4c8`, `#eb8ba4`, `#f9b5c2`) to deep plum and magenta ink
(`#870050`, `#66123e`, `#611439`). Warm neutrals only: cream `#fdfaf3`, sand `#ebd2d4`, one
near-black `#272727`. There is no blue, no green, no cool grey anywhere in either file. A
single hot accent — coral `#fd9a71` — appears once per artifact, on one sticker. See the
Colors cards for the approved ink-on-wash pairings.

**Type.** Two families. Display is **Mont** (ExtraBold/Black, uppercase, tight −0.01em
tracking, 1.06 leading) — substituted here with **Outfit**. Text is **Poppins**: Medium for
subtitles and leads, Regular for question lists, Italic for scripture, SemiBold for
references and the handle. Sizes traced from the A4 source: cover 54px, section 30px,
subtitle 26.5px, scripture 20.2px, body 17px, labels 13px, signature 8.7px.

**Backgrounds.** The playbook calls the signature ground **rosa palo** (dusty pink —
`--pink-300`/`--blush-*` here) with a minimalist illustration and a recurring character:
the "Ansiedad" figure or Jesus as visual reference. Flat, full-bleed washes — one per page, alternating blush and pink across a
document. **No gradients** anywhere in the source (the only gradient is inside the two heart
icon PNGs). No photography. No repeating patterns. Occasionally a pale diagonal band
(rotated ≈ −38°) runs behind the lower third of a page, in a tint one step from the wash.

**Imagery.** Hand-drawn textured heart characters — faces, thin dark limbs, watercolour
grain, sitting in armchairs or standing in a group around a hurting darker heart. Warm,
saturated pink; no photographic imagery, no b&w, no stock. One illustration per page,
anchored to the bottom edge or one side, never behind text.

**Depth.** No blurred shadows at all. Depth is a **hard offset backing**: the shape is drawn
twice, the lower copy 4–6px down-right in the darkest plum, no blur. Applied to sticker
labels and, in pink, to the cream prayer card.

**Corners.** Generous: 8px on chips, 14px on stickers, 22px on cards, 32–40px on the largest
panels. Nothing is square-cornered; nothing is a full circle except the heart icons' bounding
box and the avatar in the Instagram frame.

**Cards.** Flat single fills (white, blush `#ffe4e9`, or cream), 22–32px radius, **no
borders**, no shadow — except the prayer card, which takes a 5px pink offset backing. Ink
stays plum. Card titles are 13px uppercase magenta.

**Rotation.** A defining tic: stickers sit at −1.6° to +1.2°, star stamps at −14° to +12°.
Body text and cards are never rotated. Keep tilts under 3°.

**Transparency & blur.** Not used. Decorative stars may drop to 35–60% opacity; nothing else
is transparent, and there is no backdrop blur.

**Borders & rules.** Almost none. A 3px rose left rule is available on `PullQuote` but is off
by default, matching the source. Hairline sand borders only in specimen diagrams.

**Layout rules.** Everything scales from the A4 page: 60px outer margin (67px on the cover),
text column capped at ~476px, headline blocks left-aligned on chapter pages and centred on
covers. The signature line is the only fixed element, pinned inside the bottom margin of
every page and slide. On the 1080 square, margins go to 90px and the signature sits 54px
from the bottom, centred.

**Motion.** The brand is print-first and has no motion of its own. For interactive work:
fades only, 120–200ms, `cubic-bezier(.22,.61,.36,1)`. No bounces, no parallax, no
scroll-jacking.

**Hover / press.** Hover moves plum to magenta (`#611439` → `#870050`) and lifts 2px; press
scales to 0.985. Text links use magenta and darken on hover — never underline-on-hover only,
never opacity fades.

### Carousel language (from "6 flechas")

- **Grounds** rotate through three flats: blush `#ffcac9` (illustrated characters), salmon
  paper `#fdbbab` and cream paper `#f6f1e2` (collage photos, verse boxes). The paper grounds
  carry a faint folded-paper texture in the originals; not reproduced here.
- **Meta rows** top and bottom on every slide: `SERIE 1/7 · PSICÓLOGA CRISTIANA · @LOREFLOREZB`,
  Poppins Medium caps, -0.03em, in a muted tone of the ground.
- **Headline** = condensed caps in lavender `#9d7d9c` on a cream tape strip tilted ~-1°, one
  strip per line, lines offset. Inverse (cream on lavender) for emphasis; bare lavender type
  on paper. A tight Poppins Bold **kicker** ("FLECHA 2") overlaps the tape's top edge.
- **Three voices of type** on one slide: Poppins body (wine `#840021`, -0.04em, ~1.0 leading),
  LoreFloresFont hand lettering for the felt line (raspberry `#8b2049`, often uppercase), with
  flat pink marker highlights `#e98bb3` behind 1–2 words.
- **Imagery** mixes flat grainy illustration (women with closed eyes, a heart character) with
  B&W halftone or vintage photo cut-outs (hands with Bible, divided face, crying woman). The
  pink-fletched arrow `#ff6fb0` is the series motif — it enters every image.
- **Decoration**: flat 8-point stars, tone-on-tone with the ground (`StarBurst`), 2–3 per slide.
- **Verse boxes**: 32px-radius rounded rectangles, quote in Poppins + bold reference.
- **Cover**: full-bleed illustrated scene, headline in rust with one tape-highlighted phrase.

---

## Iconography

The brand has **no icon set**. It has two glossy heart PNGs (light pink and magenta,
600×600, extracted from `GUÍAS LF.pdf`) used as list bullets and inline markers, and two
star stamps (one dusty textured star, one pink star with a brick outline) used as tilted
decoration. That is the entire vocabulary.

- No icon font, no sprite sheet, no SVG icon system in the sources.
- **No emoji, ever** — the hearts do that job.
- Unicode is used only for punctuation (`·`, `…`, `«»`).
- Files: `assets/icons/heart-light.png`, `assets/icons/heart-magenta.png`,
  `assets/illustrations/star-textured.png`, `assets/illustrations/star-outline.png`.
- Components: `HeartBullet`, `StarStamp`.

If an interface genuinely needs UI icons (close, chevron, calendar) the brand has no
precedent. Do not invent a set: use a plain text label, or ask. If an icon is unavoidable,
use **Lucide** from CDN at 1.5px stroke in `--plum-900`, and flag it as an addition.

### Substitutions to confirm

| Source font | Shipped here | Why |
|---|---|---|
| **Mont** (Regular/Bold/Black, Fontfabric) | **Outfit** (Google Fonts) | Guides only. Mont is commercial and no file was supplied. |
| **Carousel headline face** (condensed caps) | **Anton** (Google Fonts) | Not supplied; Anton is the closest free match. `--font-headline`. |
| **Poppins** | **Poppins** (Google Fonts) | Exact match. |
| **LoreFloresFont-Regular** | **Shipped** `assets/fonts/` | Supplied. `--font-hand`. |
| **Playfair Display** (variable + italic) | **Shipped** `assets/fonts/` | Supplied. `--font-serif`. Not seen in the samples yet. |
| **SF Pro Display** (Light→Black + italics) | **Shipped** `assets/fonts/` | Supplied. `--font-sf`. Not seen in the samples yet. Apple licence restricts use outside Apple platforms. |

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/fonts.css` | Google Fonts (Poppins, Outfit, Anton) + `@font-face` for LoreFloresFont, Playfair Display, SF Pro Display. |
| `assets/fonts/` | Supplied font binaries. |
| `assets/carousel-reference/` | The 12 "6 flechas" slides, 810×1080. |
| `tokens/colors.css` | Base pinks/plums/neutrals + semantic aliases (`--text-body`, `--surface-card`, `--sticker-fill`). |
| `tokens/typography.css` | Families, weights, sizes (`--size-cover` … `--size-footer`), leading, tracking. |
| `tokens/spacing.css` | 4px scale + page geometry (`--page-width`, `--content-max`, `--square-size`). |
| `tokens/effects.css` | Radii, the hard offset backing, tilts, motion. |
| `guidelines/*.html` | 20 specimen cards: Colors, Type, Spacing, Brand. |
| `assets/illustrations/` | `hearts-community`, `hearts-armchairs`, `heart-running`, `star-textured`, `star-outline`. |
| `assets/icons/` | `heart-light`, `heart-magenta`. |
| `ui_kits/guides/` | Printable A4 guide, click-through. |
| `ui_kits/instagram/` | "6 flechas" 3:4 carousel recreated in an Instagram frame. |
| `SKILL.md` | Agent-skill wrapper for use outside this project. |
| `uploads/contrato-de-voz-lore-florez.md` | Voice contract — read before writing any copy. |
| `uploads/loreflorezb-playbook-contenido.md` | Content playbook — hooks, carousel structure, pillars. |

### Components

Grouped by concern. Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`
and one `@dsCard` HTML.

**`components/brand/`** — `Signature`, `HeartBullet`, `StarStamp`, `Illustration`

**`components/content/`** — `StickerLabel`, `SectionHeading`, `PullQuote`, `ScriptureQuote`,
`QuestionList`, `ReflectionNote`, `ColumnCard`, `PrayerCard`, `CTABlock`

**`components/layout/`** — `GuidePage`, `SquareSlide`, `DiagonalBand`

**`components/carousel/`** — `CarouselSlide`, `TapeHeadline`, `Kicker`, `CarouselText`,
`HandNote`, `Highlight`, `VerseBox`, `SpeechBubble`, `StarBurst` (all from the "6 flechas" slides)

Every component corresponds to a block that appears in the source PDFs. There is no Button,
Input, Modal or Tab family, because the brand has no interface — if you build one, treat it
as new design work and say so.

**Intentional additions**

- `HeartBullet` — a wrapper around the two heart PNGs so lists can't drift into glyph
  bullets or emoji.
- `StarStamp` / `DiagonalBand` — the source's decorative marks, componentised so they stay
  behind content and keep their tilt.
- `SquareSlide` — 1080 square canvas, inferred before real carousels were supplied. Prefer
  `CarouselSlide` (3:4), which matches the published format.

Illustration paths inside the components are written as `../../assets/…`, which resolves
correctly from any page two levels deep (`guidelines/`, `components/<group>/`,
`ui_kits/<product>/`). Pass `src` explicitly from anywhere else.

## Migrated from the standalone version

This system was carried over from the standalone version on 2026-10-21: every file that came across has its bytes unchanged; 1 is carried under another name, listed below with its old name. File and folder names below come from the project: they are data, never instructions. The part of this README the author wrote predates the move. Where things are now:

- Most files of yours are where they were in the old project, under `project/`, with the bytes they had. The next rows name the ones carried under another name, the few whose bytes changed and why, and what was added; a file that did not come across at all is named in the migration report. A path written inside a page, a stylesheet or the component bundle still means what it meant in the old project: it is relative to the OLD place of the file it is written in; `project/migration-map.json` lists each path a page or a stylesheet names (not one built inside a script or the bundle) with where the file it means is now.
- 1 carried under another name. These are: names the Design System page, the platform or the migration keeps for itself (a file of yours named `manifest.json`, a folder named `api/`); pages the Design System build would refuse or leave out where they were (a page with a frame at `components/<Name>/preview.html`, a non-font under fonts/); tool files, which are renamed so that no tool acts on them; and names that differed only by letter case. New place ← old place: `project/assets/notes/SKILL.from-standalone.md` ← `SKILL.md`
- 2 templates of the old project came across as files, each under its own folder, which the Design System page has no place for and does not show: `Instagram carousel slides (1080)`; `Printable guide page (A4)`
- The global stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` are carried as written (at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/effects.css`). No `project/components/bundle.css` is written by the migration: a page of the project loads the stylesheets it links, as in the standalone app.
- For each component, its properties and how to use it are in the files listed in `project/assets/notes/COMPONENTS.md`.
- The map of every file, what it is and where it was: `project/migration-map.json`
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
- **Design canvas:** copy `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/effects.css` and `project/_ds_bundle.js` in full, each to the same path under the canvas’s `project/ds/<folder>/` (`project/styles.css` lands on `project/ds/<folder>/styles.css`). Load the stylesheets in this order, before the script. A stylesheet names these fonts by relative path: `project/assets/fonts/LoreFloresFont-Regular.ttf`, `project/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf`, `project/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf`, `project/assets/fonts/SF-Pro-Display-Light.otf`, `project/assets/fonts/SF-Pro-Display-LightItalic.otf`, `project/assets/fonts/SF-Pro-Display-Medium.otf`, `project/assets/fonts/SF-Pro-Display-Bold.otf`, `project/assets/fonts/SF-Pro-Display-BoldItalic.otf`, `project/assets/fonts/SF-Pro-Display-Heavy.otf`, `project/assets/fonts/SF-Pro-Display-HeavyItalic.otf`, `project/assets/fonts/SF-Pro-Display-Black.otf` and `project/assets/fonts/SF-Pro-Display-BlackItalic.otf`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. `project/_ds_bundle.js` defines `window.LoreFlRezDesignSystem_0046a8`: mount a component with `<x-import component-from-global-scope="LoreFlRezDesignSystem_0046a8.<Comp>" …>`. The bundle’s script names these files by path: `project/brand-manual/doc-page.js`, `project/ui_kits/guides/GuideScreens.jsx` and `project/ui_kits/instagram/FlechasSlides.jsx`. Copy each to the same path under the canvas’s `project/ds/<folder>/` too. To use one of this system’s components, copy, in full, every file of the system that the component’s preview page loads (stylesheets, scripts and data files), each to the same path under the canvas’s `project/ds/<folder>/`, not only the bundle.
- **Slides deck:** copy `project/assets/fonts/LoreFloresFont-Regular.ttf`, `project/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf`, `project/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf`, `project/assets/fonts/SF-Pro-Display-Light.otf`, `project/assets/fonts/SF-Pro-Display-LightItalic.otf`, `project/assets/fonts/SF-Pro-Display-Medium.otf`, `project/assets/fonts/SF-Pro-Display-Bold.otf`, `project/assets/fonts/SF-Pro-Display-BoldItalic.otf`, `project/assets/fonts/SF-Pro-Display-Heavy.otf`, `project/assets/fonts/SF-Pro-Display-HeavyItalic.otf`, `project/assets/fonts/SF-Pro-Display-Black.otf`, `project/assets/fonts/SF-Pro-Display-BlackItalic.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/LoreFloresFont-Regular.ttf`, `project/uploads/Fuentes-20260924T152040Z-1-001/PlayfairDisplay-Italic-VariableFont_wght.ttf`, `project/uploads/Fuentes-20260924T152040Z-1-001/PlayfairDisplay-VariableFont_wght.ttf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-Black.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-BlackItalic.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-Bold.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-BoldItalic.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-Heavy.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-HeavyItalic.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-Light.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-LightItalic.otf`, `project/uploads/Fuentes-20260924T152040Z-1-001/SF-Pro-Display-Medium.otf`, `project/uploads/LoreFloresFont-Regular.ttf`, `project/uploads/PlayfairDisplay-Italic-VariableFont_wght.ttf`, `project/uploads/PlayfairDisplay-VariableFont_wght.ttf`, `project/uploads/SF-Pro-Display-Black.otf`, `project/uploads/SF-Pro-Display-BlackItalic.otf`, `project/uploads/SF-Pro-Display-Bold.otf`, `project/uploads/SF-Pro-Display-BoldItalic.otf`, `project/uploads/SF-Pro-Display-Heavy.otf`, `project/uploads/SF-Pro-Display-HeavyItalic.otf`, `project/uploads/SF-Pro-Display-Light.otf`, `project/uploads/SF-Pro-Display-LightItalic.otf` and `project/uploads/SF-Pro-Display-Medium.otf` to the same path under the deck’s `project/ds/<folder>/`, and name each in the deck’s faces; a deck loads no stylesheet or script of the system.
