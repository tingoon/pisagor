---
"@pisagor/vue": minor
---

Vue `TagsInput` follows the thin parts + shorthand pattern (mirrors React). `TagsInput` is now a shorthand that renders the control, items and clear button; adds `TagsInput.Root` and `TagsInput.Label`, and parts map 1:1 to Ark with localized default `aria-label`s. **Breaking:** compound usage starts from `TagsInput.Root`; delete / clear triggers no longer render icons.
