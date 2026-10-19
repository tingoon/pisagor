---
"@pisagor/vue": minor
"@pisagor/vue-form": patch
---

**Breaking (Vue):** `RadioGroup.Item` is a thin Ark item and no longer renders its control, text,
and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or use the
shorthand `items`. `RadioGroupField` is updated accordingly.
