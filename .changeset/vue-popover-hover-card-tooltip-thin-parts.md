---
"@pisagor/vue": minor
---

Vue `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern (mirrors React). Each default export is a shorthand (`trigger`, content, `showArrow`, `classNames`) that renders the `Teleport`, positioner and arrow; compound usage starts from `.Root`. Adds `ArrowTip` parts and `HoverCard.Positioner`. **Breaking:** `Content` no longer renders the teleport / positioner / arrow; named `PopoverRoot`, `HoverCardContent`, … component exports are removed (use `Popover.*` / `HoverCard.*`; the `*Props` types are exported).
