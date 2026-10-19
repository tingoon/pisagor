---
"@pisagor/svelte": minor
---

Svelte `CircularSlider` follows the thin parts + shorthand pattern (mirrors React and Solid). The shorthand gains `label`, `showValue`, `valuePrefix`, `valueSuffix` and `classNames`; new parts `Root`, `Label`, `Ring`, `HiddenInput` and `Context`. **Breaking:** `CircularSlider.Control` no longer renders the ring, markers and thumb; `CircularSlider.ValueText` no longer takes `prefix`/`suffix`; `Root` no longer renders `Control` or the hidden input; the old progress ring part is replaced by `Ring`.
