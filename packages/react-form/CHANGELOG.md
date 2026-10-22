# @pisagor/react-form

## 0.2.1

### Patch Changes

- 914b1de: React `DatePicker` follows the thin parts + shorthand pattern. `DatePicker` is now a shorthand
  (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`, children replace the default
  calendar) that renders the input, calendar trigger, `Portal`, `Positioner`, and default calendar.
  Parts map 1:1 to Ark. Adds `DatePicker.Positioner` and `DatePickerContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `DatePicker.Root`, and you render `Portal` and `Positioner`
    yourself (`Content` no longer portals or positions).
  - `Content` no longer renders a default calendar; compose `Calendar.*` parts or use the shorthand.
  - `Input` is the bare Ark input (no input group, calendar button, or clear button). Use the
    shorthand or compose `InputGroup` with `Input asChild`, `Trigger`, and `ClearTrigger`.
  - `Trigger` is no longer wrapped in `Control` automatically.
  - `ClearTrigger` no longer hides itself or renders an icon.
  - The deprecated `DatePicker.Timer` alias is removed; use `DatePicker.TimeInput`.
- 804b60e: React `InputOTP` follows the thin parts + shorthand pattern. `InputOTP` is now a shorthand
  (`length`, `groupSize`, `classNames`). Adds `InputOTP.Root`, `Control`, `Label`, and
  `InputOtpContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `InputOTP.Root`, which no longer wraps children in `Control`;
    render `<InputOTP.Control>` yourself.
  - `InputOTP.Slot` is renamed to `InputOTP.Input` (Ark name).
  - Named `InputOTPRoot`, `InputOTPSlot`, and `InputOTPSeparator` exports are removed.
- cddebff: React `NumberInput` follows the thin parts + shorthand pattern. `NumberInput` is now a shorthand
  (`placeholder`, `clearable`, `label`, `showTriggers`, `inputProps`, `classNames`) that renders the
  decrement/increment buttons and input. Adds `NumberInput.Root`, `Label`, `ValueText`, and
  `NumberInputContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `NumberInput.Root`; the root no longer auto-renders a control when
    it has no children.
  - `DecrementTrigger` / `IncrementTrigger` no longer render a `Button` or icon; use `asChild` with
    your own button and icon. They keep the localized `aria-label`.
  - `Input` is the bare Ark input; wrap Pisagor `Input` with `asChild` for the field look.
  - `Scrubber` no longer renders a label; compose `<Scrubber asChild><Label asChild><Field.Label>`.
- Updated dependencies [76eb64c]
- Updated dependencies [c25a70b]
- Updated dependencies [c8ae77a]
- Updated dependencies [918ebb4]
- Updated dependencies [3fabd88]
- Updated dependencies [12b7fcd]
- Updated dependencies [ab23cda]
- Updated dependencies [68aa748]
- Updated dependencies [fc4ea2f]
- Updated dependencies [595c0ef]
- Updated dependencies [914b1de]
- Updated dependencies [ac95842]
- Updated dependencies [99e3673]
- Updated dependencies [d10ee2b]
- Updated dependencies [dfa00fa]
- Updated dependencies [8c1ba8e]
- Updated dependencies [6454903]
- Updated dependencies [804b60e]
- Updated dependencies [a8e3f40]
- Updated dependencies [179a336]
- Updated dependencies [9bb1531]
- Updated dependencies [0bc32c9]
- Updated dependencies [d772e11]
- Updated dependencies [cddebff]
- Updated dependencies [01c885e]
- Updated dependencies [0942cab]
- Updated dependencies [19fb071]
- Updated dependencies [51f0b4a]
- Updated dependencies [2fc35e7]
- Updated dependencies [0308f2f]
- Updated dependencies [507a1d6]
- Updated dependencies [7da3fb1]
- Updated dependencies [7e8a844]
- Updated dependencies [abf9420]
- Updated dependencies [c7b63f1]
- Updated dependencies [fafc9fd]
- Updated dependencies [d07dfcd]
- Updated dependencies [c1c42dd]
- Updated dependencies [3457a73]
- Updated dependencies [5ac6d3a]
- Updated dependencies [e5afe8e]
- Updated dependencies [e304eff]
- Updated dependencies [349ace9]
  - @pisagor/react@1.0.0

## 0.2.0

### Minor Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.
- 7493c27: Add `@pisagor/mcp` and ship Intent skills plus `catalog.gen.json` with UI packages for agent tooling.

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/react@0.3.0
  - @pisagor/utils@0.2.0

## 0.1.1

### Patch Changes

- Updated dependencies [2df1c31]
  - @pisagor/react@0.2.0
