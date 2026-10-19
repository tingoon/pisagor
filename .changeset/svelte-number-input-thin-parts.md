---
"@pisagor/svelte": minor
---

Svelte `NumberInput` follows the thin parts + shorthand pattern (mirrors React and Solid). `NumberInput` is now a shorthand (`label`, `placeholder`, `clearable`, `showTriggers`, `inputProps`, `classNames`); adds `NumberInput.Label` and `NumberInput.ValueText`. **Breaking:** compound usage starts from `NumberInput.Root`; `Input` is the bare Ark input (use `asChild` with `Input`); `DecrementTrigger` / `IncrementTrigger` no longer render a button or icon; `Scrubber` no longer wraps a label; `Control` drops `clearable` (set `data-clearable` yourself).
