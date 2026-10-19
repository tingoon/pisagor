---
"@pisagor/vue": minor
---

Vue `Steps` follows the thin parts + shorthand pattern (mirrors React). `Steps` is now a shorthand (`items`, `completedContent` / `#completed`, `showControls`, `classNames`) that renders the list, indicators (number, then check), titles, content and localized back / next buttons; adds `Steps.Root`. **Breaking:** compound usage starts from `Steps.Root`; `Indicator` no longer renders the check icon; `PrevTrigger` / `NextTrigger` are thin.
