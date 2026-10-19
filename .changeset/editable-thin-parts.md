---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
"@pisagor/utils": patch
---

React `Editable` follows the thin parts + shorthand pattern. `Editable` is now a shorthand
(`placeholder`, `size`, `multiline`, `showControls`, `classNames`) that renders the input, preview,
and localized cancel/submit buttons. `Input`, `EditTrigger`, `CancelTrigger`, and `SubmitTrigger`
are now styled thin parts. Adds `Editable.Root`, `EditableContract`, and the `editable.cancel` /
`editable.submit` messages.

**Breaking (React):** compound usage starts from `Editable.Root`.
