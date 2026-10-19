---
"@pisagor/solid": minor
---

Solid `Steps` follows the thin parts + shorthand pattern (mirrors React). `Steps` is now a shorthand (`items`, `completedContent`, `showControls`, `classNames`) that renders the list, indicators (number, then check), titles, content and localized back / next buttons; adds `Steps.Root`. **Breaking:** compound usage starts from `Steps.Root`; `Indicator` no longer renders the label / check icon (compose your own); named `StepsRoot`, `StepsItem`, … exports are removed.
