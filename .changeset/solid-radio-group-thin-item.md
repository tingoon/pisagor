---
"@pisagor/solid": minor
---

**Breaking (Solid):** `RadioGroup.Item` is a thin Ark item and no longer renders its control,
text, and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or
use the shorthand `items`. `tabIndex` on `Item` now applies to the item root; set it on
`ItemHiddenInput` instead.
