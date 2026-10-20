---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `Dialog` and `Sheet` follow the thin parts + shorthand pattern. The shorthand (`Dialog`,
`Sheet`) takes `trigger`, `title`, `description`, `actions`, `scrollFade`, `showCloseButton` and
`classNames` and renders the portal, backdrop (modal only), positioner, header, scrollable body,
footer and corner close button. Every part is a single styled element built with
`withProvider` / `withContext`.

**Breaking (React):** compound usage starts from `Dialog.Root` / `Sheet.Root`, and you render
`Portal`, `Backdrop` and `Positioner` yourself (`Sheet.Content` no longer adds them).
`Content` no longer renders the corner close button (`showCloseButton` moved to the shorthand).
`Body` no longer wraps its children in `ScrollArea` (`scrollFade` moved to the shorthand).
`Header` no longer takes `title` / `description`. Variants moved to the root: Dialog `size` /
`bottomStickOnMobile` and Sheet `placement` / `variant`. Named `DialogRoot`, `DialogContent`,
`SheetRoot`, … function exports are removed; use `Dialog.*` / `Sheet.*`. `Sidebar` props are now
plain `div` props (they used to include unused sheet root props).

`dialogRecipe` gains empty `base`, `trigger` and `closeTrigger` slots; `sheetRecipe` gains an
empty `base` slot.
