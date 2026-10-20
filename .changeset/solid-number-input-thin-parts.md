---
"@pisagor/solid": minor
---

Solid `NumberInput` follows the thin parts + shorthand pattern (mirrors React). `NumberInput` is now a shorthand (`label`, `placeholder`, `clearable`, `showTriggers`, `inputProps`, `classNames`); adds `NumberInput.Root`, `Label` and `ValueText`. **Breaking:** compound usage starts from `NumberInput.Root`; `Input` is the bare Ark input (use `asChild` with `Input`); `DecrementTrigger` / `IncrementTrigger` no longer render a button or icon; `Scrubber` no longer wraps a label; `Control` drops `clearable` (set `data-clearable` yourself).
