---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `AlertDialog` follows the thin parts + shorthand pattern. The shorthand takes `trigger`,
`title`, `description`, `actions`, children (body), `scrollFade`, `showCloseButton` and
`classNames` and renders the portal, backdrop, positioner, header, scrollable body and footer.
`Action` and `Cancel` stay as semantic parts.

**Breaking (React):** compound usage starts from `AlertDialog.Root` and you render `Portal`,
`Backdrop` and `Positioner` yourself. `Content` no longer renders the corner close button
(`showCloseButton` moved to the shorthand), `Body` no longer wraps children in `ScrollArea`
(`scrollFade` moved to the shorthand) and `Header` no longer takes `title` / `description`.
Named `AlertDialogRoot`, `AlertDialogContent`, … function exports are removed; use
`AlertDialog.*`. Parts now carry `data-scope="alert-dialog"`.

`alertDialogRecipe` gains empty `base`, `trigger` and `closeTrigger` slots.
