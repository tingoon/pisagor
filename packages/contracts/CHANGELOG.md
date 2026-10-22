# @pisagor/props

## 1.0.0

### Major Changes

- 7da3fb1: **Breaking:** Rename `@pisagor/props` to `@pisagor/contracts`. Update imports:
  
  ```ts
  import type { ButtonRootContract } from "@pisagor/contracts";
  ```

### Minor Changes

- 12b7fcd: React `Checkbox` shorthand adds `label` and `classNames` (`CheckboxContract`).
  
  **Breaking (React):** `Checkbox.Control` no longer renders default check / minus indicators;
  render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
  the shorthand. The shorthand no longer accepts `children`.
- ab23cda: React `CircularSlider` follows the thin parts + shorthand pattern. `CircularSlider` is now a
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
- 68aa748: React `Collapsible` follows the thin parts + shorthand pattern. `Collapsible` is now a shorthand
  (`trigger`, `showIndicator`, `classNames`, children as the body). Adds `Collapsible.Root`,
  `Collapsible.Body`, and `CollapsibleContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `Collapsible.Root`.
  - `Content` no longer renders an inner `div` with your `className`; wrap children in
    `<Collapsible.Body className="…">` for the same result.
  - Named exports `CollapsibleRoot`, `CollapsibleTrigger`, `CollapsibleContent`, and
    `CollapsibleIndicator` are removed; use `Collapsible.*`.
- fc4ea2f: React `ColorPicker` follows the thin parts + shorthand pattern. `ColorPicker` is now a shorthand
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
- d10ee2b: React `Editable` follows the thin parts + shorthand pattern. `Editable` is now a shorthand
  (`placeholder`, `size`, `multiline`, `showControls`, `classNames`) that renders the input, preview,
  and localized cancel/submit buttons. `Input`, `EditTrigger`, `CancelTrigger`, and `SubmitTrigger`
  are now styled thin parts. Adds `Editable.Root`, `EditableContract`, and the `editable.cancel` /
  `editable.submit` messages.
  
  **Breaking (React):** compound usage starts from `Editable.Root`.
- dfa00fa: React `FileUpload` follows the thin parts + shorthand pattern. `FileUpload` is now a shorthand
  (`icon`, `title`, `description`, `trigger`, `helper`, `label`, `clearTrigger`, `dropzone`,
  `showList`, `classNames`, `itemClassNames`). Adds `FileUpload.Root`, `Label`, `Context`,
  `FileUploadContract`, `clearTrigger` / `label` / `trigger` recipe slots, and the
  `fileUpload.clearFiles` message.
  
  **Breaking (React):**
  
  - Compound usage starts from `FileUpload.Root`.
  - Removed the style-only `DropzoneIcon`, `Title`, `Description`, and `Helper` wrappers; use the
    shorthand props (or your own markup inside `Dropzone`).
  - Removed `List`; the shorthand renders the file list, or map `FileUpload.Context` files to
    `FileUpload.Item` parts.
  - `ClearTrigger` and `ItemDeleteTrigger` now default a localized `aria-label`.
- 6454903: React `ImageCropper` follows the thin parts + shorthand pattern. `ImageCropper` is now a shorthand
  (`src`, `alt`, `axis`, `classNames`). Adds `ImageCropper.Root`, `Viewport`, and
  `ImageCropperContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `ImageCropper.Root`, which no longer renders `Viewport` or an
    image from `src`; render `<ImageCropper.Viewport>` yourself.
  - `Selection` no longer renders grid lines or handles; add `<ImageCropper.Grid axis="…" />` and
    `<ImageCropper.Handle position="…" />` (or use the shorthand).
  - Named `ImageCropper*` part exports are removed; use `ImageCropper.*`.
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
- 01c885e: React `Pagination` follows the thin parts + shorthand pattern. `Pagination` is now a shorthand
  (`classNames`) that renders localized previous/next buttons and the page list. Adds
  `Pagination.Root`, `Pagination.Context`, `PaginationContract`, and the `pagination.previous` /
  `pagination.next` messages.
  
  **Breaking (React):**
  
  - Compound usage starts from `Pagination.Root`, which no longer auto-renders triggers and pages.
  - `PrevTrigger`, `NextTrigger`, and `Item` are bare Ark parts (no `Button`, label, or icon); use
    `asChild` with your own button.
  - `Pagination.Items` is removed; map pages with `Pagination.Context` (or use the shorthand).
  - Named `Pagination*` part exports are removed; use `Pagination.*`.
- 19fb071: React `PasswordInput` parts are thin 1:1 Ark wrappers; the shorthand keeps its API and adds
  `classNames` (`PasswordInputContract`). Adds `PasswordInput.Label` and `indicator` / `input` /
  `label` / `visibilityTrigger` recipe slots.
  
  **Breaking (React):**
  
  - `Control` and `Input` no longer render `InputGroup` / `InputGroup.Input`; pass them with
    `asChild`.
  - `VisibilityTrigger` no longer wraps itself in an `InputGroup.Addon` / button or renders eye
    icons; it keeps the localized `aria-label`.
  - `PasswordInput.Root` accepts all Ark root props.
- 0308f2f: React `QrCode` follows the thin parts + shorthand pattern. `QrCode` is now a shorthand
  (`overlay`, `classNames`) that renders the frame and pattern. Adds `QrCode.Root`, `Pattern`,
  `DownloadTrigger`, and `QrCodeContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `QrCode.Root`, which no longer auto-renders a frame.
  - `Frame` no longer renders `Pattern`; add `<QrCode.Pattern />`.
  - `QrCode.Download` is renamed to `QrCode.DownloadTrigger` (Ark name).
  - Named `QrCodeRoot`, `QrCodeFrame`, `QrCodeOverlay`, and `QrCodeDownload` exports are removed.
- c1c42dd: React `Steps` follows the thin parts + shorthand pattern. `Steps` is now an items-driven shorthand
  (`items`, `completedContent`, `showControls`, `classNames`) with localized back/next buttons.
  `PrevTrigger` / `NextTrigger` are styled thin parts. Adds `Steps.Root`, `StepsPresetItem`,
  `StepsContract`, and the `steps.next` / `steps.previous` messages.
  
  **Breaking (React):** compound usage starts from `Steps.Root`; named `Steps*` part exports are
  removed (use `Steps.*`).
- 3457a73: React `TagsInput` follows the thin parts + shorthand pattern. `TagsInput` is now a shorthand
  (`placeholder`, `clearable`, `size`, `variant`, `classNames`) that renders the input group, tags,
  input, and clear-all button. Parts map 1:1 to Ark. Adds `TagsInput.Root`, `Label`, and
  `TagsInputContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `TagsInput.Root` / `TagsInput.RootProvider`; neither auto-renders
    the control, tags, or input any more (both still render the hidden input).
  - `Control` is the bare Ark control; use `asChild` with `InputGroup` for the field shell.
  - `Item` no longer renders its preview, text, delete trigger, or edit input; compose
    `ItemPreview` > `ItemText` + `ItemDeleteTrigger`, then `ItemInput`.
  - `Input`, `ItemInput`, `ItemDeleteTrigger`, and `ClearTrigger` are bare Ark parts (no
    `InputGroup` wrapper, no default icon). The triggers keep localized `aria-label`s.
  - Named `TagsInputRoot`, `TagsInputControl`, `TagsInputItem*`, `TagsInputInput`,
    `TagsInputClearTrigger`, and `TagsInputRootProvider` exports are removed; use `TagsInput.*`.
- 5ac6d3a: React `Timer` follows the thin parts + shorthand pattern. `Timer` is now a shorthand (`units`,
  `showControls`, `classNames`) that renders units with localized labels and play/pause + reset
  buttons. `Separator` and `ActionTrigger` are thin parts. Adds `Timer.Root` and `TimerContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `Timer.Root`, which no longer takes `units` / `isControlsVisible`
    (use the shorthand's `units` / `showControls`).
  - Named `Timer*` part exports are removed; use `Timer.*`.
- e304eff: React `TreeView` follows the thin parts + shorthand pattern. `TreeView` is now a shorthand that
  renders the whole `collection` (`label`, `checkbox`, `fileIcons`, `itemIcon`, `branchIcon`,
  `branchExpandedIcon`, `classNames`, `branchClassNames`, `itemClassNames`); node `icon` /
  `expandedIcon` still apply. Adds `TreeView.Root`, `BranchText`, `BranchTrigger`,
  `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `Context`, `NodeContext`,
  `TreeViewContract`, and recipe slots (`treeViewBranchRecipe.trigger`, `treeViewItemRecipe.base`).
  
  **Breaking (React):**
  
  - Compound usage starts from `TreeView.Root`; `fileIcons` moved to the shorthand.
  - `BranchControl` no longer renders the indicator, folder icon, text, or rename input; compose
    `BranchIndicator` + `BranchText` yourself.
  - `BranchContent` no longer renders `BranchIndentGuide`.
  - `ItemText` no longer renders a file icon or rename input and drops `icon`.
  - `NodeCheckbox` no longer renders a check / minus indicator; add `NodeCheckboxIndicator` with
    your icons.
  - `TreeViewProps` is now the shorthand props type; use `TreeViewRootProps` for the root.
    `TreeViewContextProps` and the named `TreeView*` part exports are removed.
- 349ace9: Trim redundant subpath exports. Subpaths remain only where they are genuinely separate: CSS (`./styles`), hooks and utils (`./hooks`, `./utils`), and heavy modules (`./data-grid`, `./data-table`, `./phone-input`, `./rich-text-editor`).
  
  **Breaking:** `@pisagor/contracts/<component>`, `@pisagor/<fw>/utils/*` and `@pisagor/<fw>/icons` are removed. Import from the package root instead (`@pisagor/contracts`, `@pisagor/<fw>/utils`), and import icons from the icon library directly: `@phosphor-icons/react`, `@phosphor-icons/vue`, `@squidlab/phosphor-solid/icons` or `phosphor-svelte`.

### Patch Changes

- 51f0b4a: React `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern.
  
  - `Popover` is now the shorthand: `trigger`, `title`, `description`, children (scrollable body),
    `actions`, `showArrow`, `showCloseButton` and `classNames`.
  - `HoverCard` is now the shorthand: `trigger`, children, `showArrow` (default `true`) and
    `classNames`.
  - `Tooltip` keeps its shorthand API; `Root`, `Trigger`, `Positioner` and `ArrowTip` are now
    recipe-aware parts.
  
  **Breaking (React):** compound usage starts from `Popover.Root` / `HoverCard.Root`, and you render
  `Portal` and `Positioner` yourself (`Content` no longer adds them). `Popover.Content` no longer
  takes `showCloseButton`, `Popover.Header` no longer takes `title` / `description` (use
  `Popover.Title` / `Popover.Description`), and `HoverCard.Content` no longer takes `showArrow`
  (render `HoverCard.Arrow`). The popover `recipe` prop moves from `Content` to the root. Named
  `PopoverRoot`, `HoverCardRoot`, … function exports are removed; use `Popover.*` / `HoverCard.*`.
  
  Recipes gain empty slots for the new parts (`base`, `trigger`, `positioner`, `arrow`, …), and
  `@pisagor/contracts` adds `HoverCardContract`.
- @pisagor/recipes@0.3.1

## 0.2.0

### Minor Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/recipes@0.3.0
