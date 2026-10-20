---
"@pisagor/vue": minor
"@pisagor/vue-form": patch
---

Vue `Checkbox` shorthand adds `label` (prop or slot) and `classNames` (`CheckboxContract`).

**Breaking (Vue):** `Checkbox.Control` no longer renders default check / minus indicators;
render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
the shorthand. `CheckboxField` keeps its own `label` prop.
