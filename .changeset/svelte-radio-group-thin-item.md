---
"@pisagor/svelte": minor
---

**Breaking (Svelte):** `RadioGroup.Item` is a thin Ark item and no longer renders its control,
text, and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or
use the shorthand `items`. `tabindex` on `Item` now applies to the item root; set it on
`ItemHiddenInput` instead. `RadioGroup.ItemHiddenInput` is now the Ark part.
