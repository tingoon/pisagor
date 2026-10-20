---
"@pisagor/vue": minor
---

Vue `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames` and the
default spacing is now `calc(var(--spacing) * 4)` (matching React).

**Breaking (Vue):**

- `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
  `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
- `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
- The shorthand renders `items` only (no default slot).
- Named `MarqueeShorthand` / `MarqueeRoot` / `MarqueeContent` / `MarqueeItem` / `MarqueeEdge` exports
  are removed; use `Marquee` / `Marquee.*`.
