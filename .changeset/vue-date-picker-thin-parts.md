---
"@pisagor/vue": minor
"@pisagor/vue-form": patch
---

Vue `DatePicker` follows the thin parts + shorthand pattern (mirrors React). `DatePicker` is now a shorthand (`clearable`, `inputProps`, `placeholder`, `size`, `variant`, `classNames`) that renders the input group, clear / calendar buttons, teleport, positioner and calendar; adds `DatePicker.Root` and `DatePicker.Positioner`, and `Control`, `Trigger`, `Input`, `ClearTrigger`, `Content`, `ValueText` and `PresetTrigger` are thin Ark parts. `vue-form` `DateField` uses the shorthand. **Breaking:** compound usage starts from `DatePicker.Root`; `Content` no longer renders the teleport / positioner; the deprecated `DatePicker.Timer` alias was removed (use `TimeInput`), along with the `DatePickerContentProps`, `DatePickerInputProps`, `DatePickerTimerProps` and `DatePickerTriggerProps` types (`DatePickerTimeInputProps` is added).
