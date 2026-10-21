# Migration report — `Lore Flórez Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Lore Flórez Design System` — a design-system project from the standalone version (authored there, namespace `LoreFlRezDesignSystem_0046a8`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 25 components (0 with a card in the project); 0 starter template(s) kept aside; 210 files in the system’s table (143.8 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `4 extra section(s): ui_kits/guides/README.md, ui_kits/instagram/README.md, uploads/contrato-de-voz-lore-florez.md, uploads/loreflorezb-playbook-contenido.md`
- `135 files outside the layout, kept as is (listed under Claude’s context, no section of their own): brand-manual/Manual de Marca.html, brand-manual/doc-page.js, components/brand/HeartBullet.jsx, components/brand/HeartBullet.prompt.md, components/brand/Illustration.jsx, components/brand/Illustration.prompt.md, components/brand/Signature.jsx, components/brand/Signature.prompt.md, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 1 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (no components/bundle.js and no components/bundle.css by the migration: a page of the project loads the bundle and the stylesheets it links, as in the standalone app)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- no components/bundle.css is written by the migration: the system’s stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/effects.css` are carried as written, at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/effects.css`; a page of the project loads the stylesheets it links, as in the standalone app
- 2 template(s) came across as files under their own folders; the Design System page has no place for a template and shows none: `Instagram carousel slides (1080)`, `Printable guide page (A4)`

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `HeartBullet` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Illustration` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Signature` | ✓ | ✓ | — (listed without an example) | ✓ |
| `StarStamp` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CarouselSlide` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CarouselText` | ✓ | ✓ | — (listed without an example) | ✓ |
| `HandNote` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Highlight` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Kicker` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SpeechBubble` | ✓ | ✓ | — (listed without an example) | ✓ |
| `StarBurst` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TapeHeadline` | ✓ | ✓ | — (listed without an example) | ✓ |
| `VerseBox` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CTABlock` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ColumnCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PrayerCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PullQuote` | ✓ | ✓ | — (listed without an example) | ✓ |
| `QuestionList` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ReflectionNote` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ScriptureQuote` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SectionHeading` | ✓ | ✓ | — (listed without an example) | ✓ |
| `StickerLabel` | ✓ | ✓ | — (listed without an example) | ✓ |
| `DiagonalBand` | ✓ | ✓ | — (listed without an example) | ✓ |
| `GuidePage` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SquareSlide` | ✓ | ✓ | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (207 files; the map lists every one):
- 39 × image
- 36 × font
- 26 × foundations page
- 25 × component types
- 25 × component source
- 25 × component guide
- 12 × kit piece
- 6 × global stylesheet
- 4 × showcase page
- 2 × document
- 2 × doc
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output
- 1 × page
- 1 × other

## Kept aside

Nothing.

## Dropped

Nothing.
