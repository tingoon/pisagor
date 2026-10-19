---
"@pisagor/vue": minor
"@pisagor/vue-form": patch
---

Vue `NumberInput` follows the thin parts + shorthand pattern (mirrors React). `NumberInput` is now a shorthand (`label`, `placeholder`, `inputProps`, `clearable`, `showTriggers`, `classNames`); adds `NumberInput.Root`, `Label` and `ValueText`, and parts map 1:1 to Ark. `vue-form` `NumberField` types were adjusted. **Breaking:** compound usage starts from `NumberInput.Root`; increment / decrement triggers no longer render buttons or icons.
