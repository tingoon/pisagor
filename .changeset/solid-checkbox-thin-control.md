---
"@pisagor/solid": minor
---

Solid `Checkbox` shorthand adds `label` and `classNames` (`CheckboxContract`).

**Breaking (Solid):** `Checkbox.Control` no longer renders default check / minus indicators;
render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
the shorthand. The shorthand no longer accepts `children`.
