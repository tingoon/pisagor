# @pisagor/solid-form

## 0.1.3

### Patch Changes

- cfd2754: Solid `DatePicker` follows the thin parts + shorthand pattern and `Calendar.PrevTrigger` / `Calendar.NextTrigger` are thin (mirrors React). `DatePicker` is a shorthand (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`; children replace the default calendar) that renders the input, calendar trigger, portal, positioner and default calendar; adds `DatePicker.Positioner`. **Breaking:** compound usage starts from `DatePicker.Root` and you render `Portal` and `Positioner` yourself; `Content` no longer renders a default calendar; `Input` is the bare Ark input; `Trigger` is no longer wrapped in `Control`; `ClearTrigger` no longer hides itself or renders an icon; `TimeInput` drops `clearable`; the deprecated `DatePicker.Timer` alias is removed. Calendar nav triggers no longer render a button or icon: pass your own with `asChild` (the localized `aria-label` stays).
- a9ee8d0: Solid `InputOTP` follows the thin parts + shorthand pattern (mirrors React). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`; named `InputOTPRoot`, `InputOTPSlot` and `InputOTPSeparator` exports are removed.
- Updated dependencies [179a336]
- Updated dependencies [2fc35e7]
- Updated dependencies [7da3fb1]
- Updated dependencies [56a1acc]
- Updated dependencies [79edbf2]
- Updated dependencies [79edbf2]
- Updated dependencies [79edbf2]
- Updated dependencies [a9ee8d0]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79edbf2]
- Updated dependencies [e96c007]
- Updated dependencies [c5ae402]
- Updated dependencies [cfd2754]
- Updated dependencies [17e8caf]
- Updated dependencies [a9ee8d0]
- Updated dependencies [a9ee8d0]
- Updated dependencies [026b8bf]
- Updated dependencies [68504d5]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79edbf2]
- Updated dependencies [79edbf2]
- Updated dependencies [2cf9b9a]
- Updated dependencies [79edbf2]
- Updated dependencies [a9ee8d0]
- Updated dependencies [68504d5]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79b4c1f]
- Updated dependencies [68504d5]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79edbf2]
- Updated dependencies [79edbf2]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79edbf2]
- Updated dependencies [79edbf2]
- Updated dependencies [68504d5]
- Updated dependencies [a9ee8d0]
- Updated dependencies [68504d5]
- Updated dependencies [a9ee8d0]
- Updated dependencies [79edbf2]
- Updated dependencies [349ace9]
  - @pisagor/solid@1.0.0

## 0.1.2

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/utils@0.2.0
  - @pisagor/solid@0.2.1

## 0.1.1

### Patch Changes

- Updated dependencies
  - @pisagor/solid@0.2.0

## 0.1.0

### Minor Changes

- Initial release: labeled field compositions and `@tanstack/solid-form` bindings.
