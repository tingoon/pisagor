---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `CircularSlider` follows the thin parts + shorthand pattern. `CircularSlider` is now a
shorthand (`size`, `thickness`, `markers`, `markersAtSteps`, `label`, `showValue`, `valuePrefix`,
`valueSuffix`, `hiddenInputProps`, `classNames`). Adds `CircularSlider.Root`, `Label`, `Ring`,
`HiddenInput`, `Context`, `CircularSliderContract`, and a `label` recipe slot.

**Breaking (React):**

- Compound usage starts from `CircularSlider.Root`, which no longer renders the control, ring,
  thumb, markers, or hidden input; compose `Control` > `Ring` + `MarkerGroup` + `Thumb` yourself.
- `Control` no longer accepts `markers` / `markersAtSteps` / `step`; render `Marker`s yourself or
  use the shorthand.
- `ValueText` no longer accepts `prefix` / `suffix`; pass children, or use the shorthand's
  `showValue` + `valuePrefix` / `valueSuffix`.
- Named `CircularSlider*` part exports are removed; use `CircularSlider.*`.
