---
"@pisagor/svelte": minor
---

Svelte `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern (mirrors React and Solid). `Popover` and `HoverCard` default exports are shorthands (`trigger`, `title`, `description`, `actions`, `showArrow`, `showCloseButton`, `classNames`); compound usage starts from `.Root` and renders `Portal` + `.Positioner` itself. Tooltip parts (`Root`, `Trigger`, `Positioner`, `Content`, `Arrow`, `ArrowTip`) are recipe-aware `withProvider` / `withContext` parts. **Breaking:** `Popover.Content` / `HoverCard.Content` no longer portal or render the positioner, arrow or close button; `Popover.Header` no longer takes `title` / `description`.
