---
"@pisagor/vue": minor
---

Vue `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern (mirrors React). Parts map 1:1 to Ark; the shorthand renders the teleport, positioner and items. Adds `.Root`, `.ArrowTip` and `.Indicator`. Icons (item indicators, submenu carets) are no longer baked into parts; pass your own. **Breaking:** compound usage starts from `.Root`; `Content` no longer renders the teleport / positioner; `SubContent` was removed (render `Positioner` / `Content` inside `Sub`); named `DropdownMenuRoot`, `ContextMenuItem`, … component exports are removed (use `DropdownMenu.*` / `ContextMenu.*`).
