# @pisagor/svelte-form

## 0.1.3

### Patch Changes

- 5aabd6c: Svelte `DatePicker` follows the thin parts + shorthand pattern and `Calendar.PrevTrigger` / `Calendar.NextTrigger` are thin (mirrors React and Solid). `DatePicker` is a shorthand (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`; children replace the default calendar) that renders the input, calendar trigger, portal, positioner and default calendar; adds `DatePicker.Positioner`. **Breaking:** compound usage starts from `DatePicker.Root` and you render `Portal` and `Positioner` yourself; `Content` no longer renders a default calendar; `Input` is the bare Ark input; `Trigger` is no longer wrapped in `Control`; `ClearTrigger` no longer hides itself or renders an icon; `TimeInput` drops `clearable`; the deprecated `DatePicker.Timer` alias is removed. Calendar nav triggers no longer render a button or icon: pass your own with `asChild` (the localized `aria-label` stays). `@pisagor/svelte-form` `DateField` uses the new parts.
- 54013f2: Svelte `InputOTP` follows the thin parts + shorthand pattern (mirrors React and Solid). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`. `@pisagor/svelte-form` `OTPField` uses the new parts.
- Updated dependencies [179a336]
- Updated dependencies [2fc35e7]
- Updated dependencies [7da3fb1]
- Updated dependencies [8e0555e]
- Updated dependencies [b7b6de2]
- Updated dependencies [b7b6de2]
- Updated dependencies [b7b6de2]
- Updated dependencies [54013f2]
- Updated dependencies [54013f2]
- Updated dependencies [b7b6de2]
- Updated dependencies [5aabd6c]
- Updated dependencies [8e0555e]
- Updated dependencies [5aabd6c]
- Updated dependencies [8e0555e]
- Updated dependencies [54013f2]
- Updated dependencies [54013f2]
- Updated dependencies [8e0555e]
- Updated dependencies [d1e4a95]
- Updated dependencies [54013f2]
- Updated dependencies [b7b6de2]
- Updated dependencies [b7b6de2]
- Updated dependencies [8e0555e]
- Updated dependencies [b7b6de2]
- Updated dependencies [54013f2]
- Updated dependencies [d1e4a95]
- Updated dependencies [54013f2]
- Updated dependencies [8e0555e]
- Updated dependencies [d1e4a95]
- Updated dependencies [54013f2]
- Updated dependencies [b7b6de2]
- Updated dependencies [b7b6de2]
- Updated dependencies [54013f2]
- Updated dependencies [b7b6de2]
- Updated dependencies [b7b6de2]
- Updated dependencies [d1e4a95]
- Updated dependencies [54013f2]
- Updated dependencies [d1e4a95]
- Updated dependencies [54013f2]
- Updated dependencies [b7b6de2]
- Updated dependencies [349ace9]
  - @pisagor/svelte@1.0.0

## 0.1.2

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/utils@0.2.0
  - @pisagor/svelte@0.2.1

## 0.1.1

### Patch Changes

- Updated dependencies
  - @pisagor/svelte@0.2.0

## 0.1.0

### Minor Changes

- Initial release: labeled field compositions and `@tanstack/svelte-form` bindings.
