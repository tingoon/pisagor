---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
"@pisagor/utils": patch
---

React `Steps` follows the thin parts + shorthand pattern. `Steps` is now an items-driven shorthand
(`items`, `completedContent`, `showControls`, `classNames`) with localized back/next buttons.
`PrevTrigger` / `NextTrigger` are styled thin parts. Adds `Steps.Root`, `StepsPresetItem`,
`StepsContract`, and the `steps.next` / `steps.previous` messages.

**Breaking (React):** compound usage starts from `Steps.Root`; named `Steps*` part exports are
removed (use `Steps.*`).
