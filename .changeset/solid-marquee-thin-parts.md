---
"@pisagor/solid": minor
---

Solid `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames`.

**Breaking (Solid):**

- `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
  `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
- `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
- Named `MarqueeContent` / `MarqueeItem` / `MarqueeEdge` exports are removed; use `Marquee.*`.
