---
"@pisagor/vue": minor
---

Vue `Calendar` previous / next triggers are now thin (mirrors React): they keep a localized default `aria-label` but no longer render caret icons. **Breaking:** pass your own icon (e.g. `as-child` + `Button` + `PhCaretLeft`).
