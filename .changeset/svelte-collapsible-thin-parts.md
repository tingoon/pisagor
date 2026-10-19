---
"@pisagor/svelte": minor
---

Svelte `Collapsible` follows the thin parts + shorthand pattern (mirrors React and Solid). `Collapsible` is now a shorthand (`trigger`, `showIndicator`, `classNames`, children as the body); adds `Collapsible.Root` and `Collapsible.Body`. **Breaking:** compound usage starts from `Collapsible.Root`; `Content` no longer renders an inner `div` with your `class` (wrap children in `Collapsible.Body`); `Indicator` no longer renders a caret icon (pass your own).
