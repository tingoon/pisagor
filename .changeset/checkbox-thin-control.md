---
"@pisagor/react": minor
"@pisagor/contracts": minor
---

React `Checkbox` shorthand adds `label` and `classNames` (`CheckboxContract`).

**Breaking (React):** `Checkbox.Control` no longer renders default check / minus indicators;
render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
the shorthand. The shorthand no longer accepts `children`.
