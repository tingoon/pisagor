---
"@pisagor/react": minor
"@pisagor/presets": patch
"@pisagor/contracts": patch
---

React `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern.

- `Popover` is now the shorthand: `trigger`, `title`, `description`, children (scrollable body),
  `actions`, `showArrow`, `showCloseButton` and `classNames`.
- `HoverCard` is now the shorthand: `trigger`, children, `showArrow` (default `true`) and
  `classNames`.
- `Tooltip` keeps its shorthand API; `Root`, `Trigger`, `Positioner` and `ArrowTip` are now
  recipe-aware parts.

**Breaking (React):** compound usage starts from `Popover.Root` / `HoverCard.Root`, and you render
`Portal` and `Positioner` yourself (`Content` no longer adds them). `Popover.Content` no longer
takes `showCloseButton`, `Popover.Header` no longer takes `title` / `description` (use
`Popover.Title` / `Popover.Description`), and `HoverCard.Content` no longer takes `showArrow`
(render `HoverCard.Arrow`). The popover `recipe` prop moves from `Content` to the root. Named
`PopoverRoot`, `HoverCardRoot`, … function exports are removed; use `Popover.*` / `HoverCard.*`.

Recipes gain empty slots for the new parts (`base`, `trigger`, `positioner`, `arrow`, …), and
`@pisagor/contracts` adds `HoverCardContract`.
