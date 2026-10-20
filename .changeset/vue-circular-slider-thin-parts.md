---
"@pisagor/vue": minor
---

Vue `CircularSlider` follows the thin parts + shorthand pattern (mirrors React). `CircularSlider` is now a shorthand (`markers`, `markersAtSteps`, `label`, `showValue`, `valuePrefix`, `valueSuffix`, `hiddenInputProps`, `classNames`); adds `CircularSlider.Root`, `Label`, `Ring`, `HiddenInput`, `Context`. **Breaking:** `Root` no longer renders the control / ring / thumb / hidden input; `Control` drops `markers`; `ValueText` drops `prefix` / `suffix`.
