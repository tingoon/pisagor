---
"@pisagor/props": minor
"@pisagor/react": minor
"@pisagor/vue": minor
"@pisagor/solid": minor
"@pisagor/svelte": minor
---

Trim redundant subpath exports. Subpaths remain only where they are genuinely separate: CSS (`./styles`), hooks and utils (`./hooks`, `./utils`), and heavy modules (`./icons`, `./data-grid`, `./data-table`, `./phone-input`, `./rich-text-editor`).

**Breaking:** `@pisagor/props/<component>` and `@pisagor/<fw>/utils/*` are removed. Import from the package root instead: `@pisagor/props` and `@pisagor/<fw>/utils`.
