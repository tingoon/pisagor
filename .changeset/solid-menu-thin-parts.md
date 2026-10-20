---
"@pisagor/solid": minor
---

Solid `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern (mirrors React). Menu parts map 1:1 to Ark and keep `data-scope="menu"`; the default exports are shorthands (`trigger`, `showArrow`, `classNames`) that render the portal, positioner and content. **Breaking:** `*.Content` no longer portals or renders the positioner; checkbox / radio / trigger items no longer bake icons — compose `ItemIndicator`, `ItemText` and `Indicator` with your own icons; compound usage starts from `.Root`; the named `DropdownMenuRoot`, `ContextMenuContent`, … exports are removed.
