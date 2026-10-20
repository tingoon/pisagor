---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `ColorPicker` follows the thin parts + shorthand pattern. `ColorPicker` is now a shorthand
(the former `ColorPicker.Field`: swatch trigger, hex input, `clearable`, `variant`, `classNames`;
children replace the default popover content). Parts map 1:1 to Ark. Adds `Root`, `Positioner`,
`AreaBackground`, `ChannelSliderTrack`, `ChannelSliderThumb`, `ChannelSliderLabel`,
`ChannelSliderValueText`, `FormatTrigger`, and `ColorPickerContract`.

**Breaking (React):**

- Compound usage starts from `ColorPicker.Root`, and you render `Portal` and `Positioner`
  yourself (`Content` no longer adds them). `ColorPicker.Field` is removed; use `ColorPicker`.
- `Area` no longer renders `AreaBackground`; add `<ColorPicker.AreaBackground />`.
- `ChannelSlider` no longer renders its track and thumb; add `<ColorPicker.ChannelSliderTrack />`
  and `<ColorPicker.ChannelSliderThumb />`.
- `EyeDropperTrigger` is the bare Ark trigger (no `Button`, no default icon); use `asChild` with
  your own button and icon. It keeps the localized `aria-label`.
- `SwatchIndicator` has no default check icon; pass `<CheckIcon />`.
- `ClearTrigger` is a bare button: it no longer wraps itself in `InputGroup.Addon`, renders an
  icon, or hides itself when cleared/disabled (the shorthand still hides it).
- `variant` / `clearable` move from the root to the shorthand.
