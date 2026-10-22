# @pisagor/vue-form

## 0.2.1

### Patch Changes

- 529e74b: Vue `Checkbox` shorthand adds `label` (prop or slot) and `classNames` (`CheckboxContract`).
  
  **Breaking (Vue):** `Checkbox.Control` no longer renders default check / minus indicators;
  render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
  the shorthand. `CheckboxField` keeps its own `label` prop.
- bc84ecb: Vue `DatePicker` follows the thin parts + shorthand pattern (mirrors React). `DatePicker` is now a shorthand (`clearable`, `inputProps`, `placeholder`, `size`, `variant`, `classNames`) that renders the input group, clear / calendar buttons, teleport, positioner and calendar; adds `DatePicker.Root` and `DatePicker.Positioner`, and `Control`, `Trigger`, `Input`, `ClearTrigger`, `Content`, `ValueText` and `PresetTrigger` are thin Ark parts. `vue-form` `DateField` uses the shorthand. **Breaking:** compound usage starts from `DatePicker.Root`; `Content` no longer renders the teleport / positioner; the deprecated `DatePicker.Timer` alias was removed (use `TimeInput`), along with the `DatePickerContentProps`, `DatePickerInputProps`, `DatePickerTimerProps` and `DatePickerTriggerProps` types (`DatePickerTimeInputProps` is added).
- 529e74b: Vue `InputOTP` follows the thin parts + shorthand pattern (mirrors React). `InputOTP` is a shorthand (`length`, `groupSize`, `classNames`); adds `InputOTP.Root`, `Label`, `Control`, `Input`, `Separator`. `vue-form` `OtpField` uses the compound parts. **Breaking:** `Slot` was renamed to `Input`.
- 529e74b: Vue `NumberInput` follows the thin parts + shorthand pattern (mirrors React). `NumberInput` is now a shorthand (`label`, `placeholder`, `inputProps`, `clearable`, `showTriggers`, `classNames`); adds `NumberInput.Root`, `Label` and `ValueText`, and parts map 1:1 to Ark. `vue-form` `NumberField` types were adjusted. **Breaking:** compound usage starts from `NumberInput.Root`; increment / decrement triggers no longer render buttons or icons.
- 529e74b: **Breaking (Vue):** `RadioGroup.Item` is a thin Ark item and no longer renders its control, text,
  and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or use the
  shorthand `items`. `RadioGroupField` is updated accordingly.
- Updated dependencies [179a336]
- Updated dependencies [2fc35e7]
- Updated dependencies [7da3fb1]
- Updated dependencies [349ace9]
- Updated dependencies [64ef561]
- Updated dependencies [9aef2f0]
- Updated dependencies [bc84ecb]
- Updated dependencies [9aef2f0]
- Updated dependencies [9aef2f0]
- Updated dependencies [529e74b]
- Updated dependencies [529e74b]
- Updated dependencies [9aef2f0]
- Updated dependencies [bc84ecb]
- Updated dependencies [64ef561]
- Updated dependencies [bc84ecb]
- Updated dependencies [64ef561]
- Updated dependencies [529e74b]
- Updated dependencies [529e74b]
- Updated dependencies [64ef561]
- Updated dependencies [66e68ad]
- Updated dependencies [529e74b]
- Updated dependencies [9aef2f0]
- Updated dependencies [9aef2f0]
- Updated dependencies [64ef561]
- Updated dependencies [9aef2f0]
- Updated dependencies [529e74b]
- Updated dependencies [66e68ad]
- Updated dependencies [529e74b]
- Updated dependencies [64ef561]
- Updated dependencies [66e68ad]
- Updated dependencies [529e74b]
- Updated dependencies [9aef2f0]
- Updated dependencies [9aef2f0]
- Updated dependencies [529e74b]
- Updated dependencies [9aef2f0]
- Updated dependencies [9aef2f0]
- Updated dependencies [66e68ad]
- Updated dependencies [529e74b]
- Updated dependencies [66e68ad]
- Updated dependencies [529e74b]
- Updated dependencies [9aef2f0]
  - @pisagor/vue@1.0.0

## 0.2.0

### Minor Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.
- 7493c27: Add `@pisagor/mcp` and ship Intent skills plus `catalog.gen.json` with UI packages for agent tooling.

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/utils@0.2.0
  - @pisagor/vue@0.3.0

## 0.1.1

### Patch Changes

- Updated dependencies [2df1c31]
  - @pisagor/vue@0.2.0
