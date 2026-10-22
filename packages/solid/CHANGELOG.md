# @pisagor/solid

## 1.0.0

### Major Changes

- 7da3fb1: **Breaking:** Rename `@pisagor/props` to `@pisagor/contracts`. Update imports:
  
  ```ts
  import type { ButtonRootContract } from "@pisagor/contracts";
  ```

### Minor Changes

- 179a336: Merge UI messages into the locale context. `useLocale()` now returns `{ locale, dir, messages, m }`:
  the BCP 47 `locale` (default `en-US`), `dir` (read from Ark's locale context), every resolved
  UI message (English defaults merged with `Provider` overrides) and `m(key, override?)`, which
  returns the override when it is not `null`/`undefined`. These are plain overridable UI messages,
  not translations. In Solid, Vue and Svelte the returned values and `m` stay reactive.
  
  **Breaking:** the separate translations context is gone. `Provider` takes flat `locale` and `messages`
  props (was `locale={{ locale }}` and `translations`), `Provider.Locale` takes the same
  props and `Provider.Translations` is removed. `useLocale().m` replaces `useMessage`,
  `useTranslation` and `useMessageResolver`; `useTranslations` is removed. In `@pisagor/utils`,
  `TranslationsConfig`, `ProviderMessages`, `defaultTranslations` and `resolveMessage` are removed in
  favour of `Messages`, `LocaleConfig` (`locale`, `messages`), `LocaleContextValue`,
  `ResolvedLocale` and `resolveLocale`; `useProviderValue()` returns `{ locale, motion }`.
- 2fc35e7: Split `Provider` into composable `Provider.Locale` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, and `useProvider` reads the resolved values.
  
  **Breaking:** `useProviderMessage` and React's `getMessage` are replaced by `useLocale().m`. Migrate `prop ?? getMessage(key)` to `const { m } = useLocale();` and `m(key, prop)`.
- 56a1acc: Solid `AlertDialog` follows the thin parts + shorthand pattern (mirrors React). The shorthand renders portal, backdrop, positioner, header, scrollable body and footer; `Action` / `Cancel` stay as semantic close-trigger buttons. **Breaking:** `AlertDialog.Content` no longer portals or renders backdrop/positioner, `AlertDialog.Header` no longer takes `title` / `description`, and the named `AlertDialogRoot`, `AlertDialogContent`, … exports are removed.
- 79edbf2: Solid `Breadcrumb` parts are thin; the shorthand adds `separator` (defaults to a caret) and now
  applies `classNames`. Adds `Breadcrumb.Root` styling via the `base` slot; named `BreadcrumbRoot`, `BreadcrumbList`, … exports are removed (use `Breadcrumb.*`).
  
  **Breaking (Solid):**
  
  - `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
  - `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
    pass your icon as children.
- 79edbf2: Solid `Card.Header` is now a thin part and no longer accepts `title` / `description` props. Compose `<Card.Title>` and `<Card.Description>` as children.
- 79edbf2: Solid `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and
  `autoplayIndicator` / `autoplayTrigger` recipe slots.
  
  **Breaking (Solid):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
  `Button` or caret / play / pause icons . They keep their
  localized `aria-label`s; pass a `<Button>` via the `asChild` render function and your icons (use
  `AutoplayIndicator` for play / pause). The shorthand still renders caret buttons.
- a9ee8d0: Solid `Checkbox` shorthand adds `label` and `classNames` (`CheckboxContract`).
  
  **Breaking (Solid):** `Checkbox.Control` no longer renders default check / minus indicators;
  render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
  the shorthand. The shorthand no longer accepts `children`.
- a9ee8d0: Solid `CircularSlider` follows the thin parts + shorthand pattern (mirrors React). The shorthand gains `label`, `showValue`, `valuePrefix`, `valueSuffix` and `classNames`; new parts `Root`, `Label`, `Ring`, `HiddenInput` and `Context`. **Breaking:** `CircularSlider.Control` no longer renders the ring, markers and thumb; `CircularSlider.ValueText` no longer takes `prefix`/`suffix`; named `CircularSliderRoot`, … exports are removed.
- 79edbf2: Solid `Collapsible` follows the thin parts + shorthand pattern (mirrors React). `Collapsible` is now a shorthand (`trigger`, `showIndicator`, `classNames`, children as the body); adds `Collapsible.Root` and `Collapsible.Body`. **Breaking:** compound usage starts from `Collapsible.Root`; `Content` no longer renders an inner `div` with your `class` (wrap children in `Collapsible.Body`); `Indicator` no longer renders a caret icon (pass your own); named `CollapsibleRoot`, `CollapsibleTrigger`, `CollapsibleContent` and `CollapsibleIndicator` exports are removed.
- e96c007: Solid `ColorPicker` follows the thin parts + shorthand pattern (mirrors React). `ColorPicker` is now the shorthand (the former `ColorPicker.Field`: swatch trigger, hex input, `clearable`, `variant`, `classNames`; children replace the default popover content). Parts map 1:1 to Ark; adds `Root`, `Positioner`, `AreaBackground`, `ChannelSliderTrack`, `ChannelSliderThumb`, `ChannelSliderLabel`, `ChannelSliderValueText` and `FormatTrigger`; `SwatchPreview` stays. **Breaking:** compound usage starts from `ColorPicker.Root` and you render `Portal` and `Positioner` yourself; `ColorPicker.Field` is removed; `Area` no longer renders `AreaBackground`; `ChannelSlider` no longer renders its track and thumb; `EyeDropperTrigger` is the bare Ark trigger (use `asChild` with your own button and icon); `SwatchIndicator` has no default check icon; `ClearTrigger` is a bare button that no longer wraps itself in an addon, renders an icon or hides itself; `variant` / `clearable` move from the root to the shorthand.
- c5ae402: Solid `Command` is now the shorthand (`items`, `placeholder`, `emptyText`, `footer`, `classNames`); `Command.Shorthand` is removed (mirrors React). `Command.Dialog` is a shorthand that renders the dialog chrome (`trigger` render fn, hidden `title` / `description`) around its children. **Breaking:** compound usage starts from `Command.Root`; `Command.Input` is the plain combobox input (wrap it in `Command.Control` and compose the search icon yourself, e.g. `InputGroup` with `Command.Input asChild`); `Command.List` no longer adds a height-capped wrapper; `Command.Empty` no longer falls back to the default message; `Command.ItemGroup` drops `heading` (use `Command.ItemGroupLabel`); `Command.DialogTrigger` and `Command.DialogContent` are removed; named `CommandRoot`, `CommandInput`, … exports are removed and `CommandShorthandItem` / `CommandShorthandProps` are now `CommandItem` / `CommandProps`.
- cfd2754: Solid `DatePicker` follows the thin parts + shorthand pattern and `Calendar.PrevTrigger` / `Calendar.NextTrigger` are thin (mirrors React). `DatePicker` is a shorthand (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`; children replace the default calendar) that renders the input, calendar trigger, portal, positioner and default calendar; adds `DatePicker.Positioner`. **Breaking:** compound usage starts from `DatePicker.Root` and you render `Portal` and `Positioner` yourself; `Content` no longer renders a default calendar; `Input` is the bare Ark input; `Trigger` is no longer wrapped in `Control`; `ClearTrigger` no longer hides itself or renders an icon; `TimeInput` drops `clearable`; the deprecated `DatePicker.Timer` alias is removed. Calendar nav triggers no longer render a button or icon: pass your own with `asChild` (the localized `aria-label` stays).
- 17e8caf: Solid `Drawer`, `Dialog` and `Sheet` follow the thin parts + shorthand pattern (mirrors React). The default export is a shorthand (`trigger`, `title`, `description`, `actions`, `scrollFade`, `showCloseButton`, `classNames`) that renders the portal, backdrop, positioner, header, scrollable body, footer and close button. Every part is a single styled element built with `withProvider` / `withContext`; compound usage starts from `.Root`.
  
  **Breaking (Solid):** `*.Content` no longer renders `Portal`, backdrop, positioner, grabber or close button; `*.Body` no longer wraps `ScrollArea`; `*.Header` no longer takes `title` / `description`; variants (`size`, `placement`, `variant`, …) move to `.Root`. The named `DrawerRoot`, `DialogContent`, `SheetContent`, … function exports are removed; use `Drawer.*`, `Dialog.*`, `Sheet.*`.
- a9ee8d0: Solid `Editable` follows the thin parts + shorthand pattern (mirrors React). `Editable` is now a shorthand (`multiline`, `showControls`, `size`, `placeholder`, `classNames`) that renders the input or textarea, preview and cancel / submit buttons; adds `Editable.Root`. Parts map 1:1 to Ark. **Breaking:** compound usage starts from `Editable.Root`.
- a9ee8d0: Solid `FileUpload` follows the thin parts + shorthand pattern (mirrors React). `FileUpload` is now a shorthand (`label`, `title`, `description`, `helper`, `icon`, `dropzone`, `trigger`, `clearTrigger`, `showList`, `classNames`, `itemClassNames`); `trigger`/`clearTrigger` accept a render function receiving the trigger props. Adds `Root`, `Label` and `Context` parts; `ClearTrigger` and `ItemDeleteTrigger` get localized default `aria-label`s. **Breaking:** compound usage starts from `FileUpload.Root`; the invented `DropzoneIcon`, `Title`, `Description`, `Helper` and `List` parts are removed (use the shorthand or plain elements).
- 026b8bf: Solid `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern (mirrors React). The default exports are shorthands (`trigger` takes a render fn that receives the trigger props); parts map 1:1 to Ark (or to the custom ActionBar state) and `ActionBar.Positioner` is added. **Breaking:** compound usage starts from `.Root` and you render `Portal` and `Positioner` yourself. FloatingPanel `Minimize` / `Maximize` / `Restore` are removed (use `StageTrigger` with your own icons) and `Header`, `Body` and `Content` no longer add the drag trigger, scroll area or resize handles. `Tour.Root` takes `tour` (from `useTour`) instead of `steps`; `Trigger`, `Footer`, `PreviousStep`, `NextStep` and the step `Actions` helper are removed (use `Tour.Control`, `Tour.Actions` and `Tour.ActionTrigger`); `useTourContext` is Ark's and returns the tour API accessor. `ActionBar.Root` no longer renders the `count` / `actions` preset and `ActionBar.Content` no longer portals or animates. Named `FloatingPanelRoot`, `TourRoot`, … exports are removed; ActionBar keeps its named exports.
- 68504d5: Solid `ImageCropper` follows the thin parts + shorthand pattern (mirrors React): `ImageCropper` is a shorthand (`src`, `alt`, `axis`, `classNames`) with `Root`, `Viewport`, `Image`, `Selection`, `Grid` and `Handle` parts. **Breaking:** compound usage starts from `ImageCropper.Root`; named part exports are removed.
- a9ee8d0: Solid `InputOTP` follows the thin parts + shorthand pattern (mirrors React). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`; named `InputOTPRoot`, `InputOTPSlot` and `InputOTPSeparator` exports are removed.
- 79edbf2: Solid `Listbox` parts are thin `withProvider` / `withContext` wrappers.
  
  **Breaking (Solid):** `Listbox.ItemIndicator` no longer renders a default check icon; pass your
  icon as children.
  
  - `Listbox.ItemGroup` no longer accepts `heading`; render `<Listbox.ItemGroupLabel>` inside it.
- 79edbf2: Solid `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames`.
  
  **Breaking (Solid):**
  
  - `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
    `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
  - `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
  - Named `MarqueeContent` / `MarqueeItem` / `MarqueeEdge` exports are removed; use `Marquee.*`.
- 2cf9b9a: Solid `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern (mirrors React). Menu parts map 1:1 to Ark and keep `data-scope="menu"`; the default exports are shorthands (`trigger`, `showArrow`, `classNames`) that render the portal, positioner and content. **Breaking:** `*.Content` no longer portals or renders the positioner; checkbox / radio / trigger items no longer bake icons — compose `ItemIndicator`, `ItemText` and `Indicator` with your own icons; compound usage starts from `.Root`; the named `DropdownMenuRoot`, `ContextMenuContent`, … exports are removed.
- 79edbf2: Solid `NavigationMenu.Trigger` no longer renders a built-in caret. Add the new `NavigationMenu.Indicator` part with your own icon: `<NavigationMenu.Trigger>Products<NavigationMenu.Indicator><CaretDownIcon /></NavigationMenu.Indicator></NavigationMenu.Trigger>`.
- a9ee8d0: Solid `NumberInput` follows the thin parts + shorthand pattern (mirrors React). `NumberInput` is now a shorthand (`label`, `placeholder`, `clearable`, `showTriggers`, `inputProps`, `classNames`); adds `NumberInput.Root`, `Label` and `ValueText`. **Breaking:** compound usage starts from `NumberInput.Root`; `Input` is the bare Ark input (use `asChild` with `Input`); `DecrementTrigger` / `IncrementTrigger` no longer render a button or icon; `Scrubber` no longer wraps a label; `Control` drops `clearable` (set `data-clearable` yourself).
- 68504d5: Solid `Pagination` follows the thin parts + shorthand pattern (mirrors React). `Pagination` is now a shorthand (`classNames`) that renders the localized previous / next buttons, page items and ellipses; adds `Pagination.Root` and `Pagination.Context`. **Breaking:** compound usage starts from `Pagination.Root`, which no longer renders default children; `PrevTrigger`, `NextTrigger` and `Item` are the bare Ark parts (use `asChild` with your own button and icons); `Ellipsis` no longer renders an icon; `Pagination.Items` is removed (use `Pagination.Context`); named `PaginationRoot`, `PaginationItem`, … exports are removed.
- a9ee8d0: Solid `PasswordInput` parts are thin and 1:1 with Ark (mirrors React). `Root`, `Label`, `Control`, `Input`, `VisibilityTrigger` and `Indicator` only style; the shorthand gains `classNames`. **Breaking:** `PasswordInput.Control` no longer renders an `InputGroup`, `PasswordInput.Input` no longer renders `InputGroup.Input`, and `PasswordInput.VisibilityTrigger` no longer renders its addon, button or eye icons; compose them with `asChild` (see the compound example).
- 79b4c1f: Solid `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern (mirrors React). `Popover` and `HoverCard` default exports are shorthands (`trigger`, `title`, `description`, `actions`, `showArrow`, `showCloseButton`, `classNames`); compound usage starts from `.Root` and renders `Portal` + `.Positioner` itself. Tooltip parts (`Root`, `Trigger`, `Positioner`, `Content`, `Arrow`, `ArrowTip`) are recipe-aware `withProvider` / `withContext` parts. **Breaking:** `Popover.Content` / `HoverCard.Content` no longer portal or render the positioner, arrow or close button; `Popover.Header` no longer takes `title` / `description`; the named `PopoverRoot`, `HoverCardContent`, … exports are removed.
- 68504d5: Solid `QrCode` follows the thin parts + shorthand pattern (mirrors React). `QrCode` is now a shorthand (`overlay`, `classNames`) that renders the frame and pattern; adds `QrCode.Root`, `QrCode.Pattern` and `QrCode.DownloadTrigger`. **Breaking:** compound usage starts from `QrCode.Root`; `Frame` no longer renders the pattern; `QrCode.Download` is renamed `QrCode.DownloadTrigger`; named `QrCodeRoot`, `QrCodeFrame`, … exports are removed.
- a9ee8d0: **Breaking (Solid):** `RadioGroup.Item` is a thin Ark item and no longer renders its control,
  text, and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or
  use the shorthand `items`. `tabIndex` on `Item` now applies to the item root; set it on
  `ItemHiddenInput` instead.
- 79edbf2: Solid `Resizable.ResizeTrigger` is now a thin part: the `withHandle` prop is removed and it no longer renders a default indicator or grip icon. Compose `<Resizable.ResizeTriggerIndicator />` or the new `<Resizable.ResizeTriggerHandle><DotsSixVerticalIcon /></Resizable.ResizeTriggerHandle>` as children.
- 79edbf2: Solid `ScrollArea` parts are thin. Adds `ScrollArea.Content` and `content` / `corner` recipe
  slots; the shorthand applies `classNames.content` / `classNames.corner`.
  
  **Breaking (Solid):** `ScrollArea.Viewport` no longer wraps its children in the Ark content
  element; render `<ScrollArea.Content>` inside it.
- a9ee8d0: Solid `SegmentGroup` parts are thin 1:1 Ark wrappers. Adds `ItemText`, `ItemControl`,
  `ItemHiddenInput`, and an `itemControl` recipe slot; the shorthand now applies `classNames`.
  
  **Breaking (Solid):**
  
  - `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
  - `SegmentGroup.Item` no longer renders text, control, or hidden input and drops `text`; compose
    `ItemText`, `ItemControl`, and `ItemHiddenInput` inside it.
  - Named `SegmentGroupIndicator` / `SegmentGroupItem` exports are removed; use `SegmentGroup.*`.
- 79edbf2: Solid `Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts. `Sidebar.Trigger` no longer renders a built-in `SidebarSimpleIcon` / sr-only label: it sets a localized `aria-label` and you pass the icon as children.
- 79edbf2: Solid `Sortable.Handle` no longer renders a default `DotsSixVerticalIcon`; pass your own icon as children.
- 68504d5: Solid `Steps` follows the thin parts + shorthand pattern (mirrors React). `Steps` is now a shorthand (`items`, `completedContent`, `showControls`, `classNames`) that renders the list, indicators (number, then check), titles, content and localized back / next buttons; adds `Steps.Root`. **Breaking:** compound usage starts from `Steps.Root`; `Indicator` no longer renders the label / check icon (compose your own); named `StepsRoot`, `StepsItem`, … exports are removed.
- a9ee8d0: Solid `TagsInput` follows the thin parts + shorthand pattern (mirrors React). `TagsInput` is now a shorthand (`placeholder`, `clearable`, `size`, `variant`, `classNames`) that renders the tag items, input and clear button; adds `TagsInput.Root` and `TagsInput.Label`. **Breaking:** compound usage starts from `TagsInput.Root` / `TagsInput.RootProvider`, which no longer render a control or items; `Control` is the bare Ark control (use `asChild` with `InputGroup`); `Item` no longer renders its preview, text, delete trigger or input; `ItemDeleteTrigger`, `ClearTrigger`, `Input` and `ItemInput` no longer render buttons, icons or input groups; named `TagsInputRoot`, `TagsInputControl`, … exports are removed.
- 68504d5: Solid `Timer` follows the thin parts + shorthand pattern (mirrors React). `Timer` is now a shorthand (`units` with localized labels, `showControls`, `classNames`); adds `Timer.Root`. `Timer.Play` now switches between pause, resume and start. **Breaking:** compound usage starts from `Timer.Root`, which no longer renders units or controls; `isControlsVisible` is replaced by the shorthand `showControls`; named `TimerRoot`, `TimerArea`, … exports are removed.
- 79edbf2: Solid `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole tree from `collection` (`label`, `checkbox`, `branchIcon`, `branchExpandedIcon`, `itemIcon`, `fileIcons`, `classNames`, `branchClassNames`, `itemClassNames`). Parts are 1:1 with Ark and no longer bake icons: `BranchControl`, `BranchIndicator`, `BranchContent`, `ItemText` and `NodeCheckbox` render only their children; new `Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `NodeContext` and `Context` parts. **Breaking:** compound usage starts from `TreeView.Root`; the `icon`/`expandedIcon` props on `BranchControl`/`ItemText` are removed (render icons as children); named `TreeViewRoot`, … exports are removed.
- 349ace9: Trim redundant subpath exports. Subpaths remain only where they are genuinely separate: CSS (`./styles`), hooks and utils (`./hooks`, `./utils`), and heavy modules (`./data-grid`, `./data-table`, `./phone-input`, `./rich-text-editor`).
  
  **Breaking:** `@pisagor/contracts/<component>`, `@pisagor/<fw>/utils/*` and `@pisagor/<fw>/icons` are removed. Import from the package root instead (`@pisagor/contracts`, `@pisagor/<fw>/utils`), and import icons from the icon library directly: `@phosphor-icons/react`, `@phosphor-icons/vue`, `@squidlab/phosphor-solid/icons` or `phosphor-svelte`.

### Patch Changes

- a9ee8d0: Solid `ToggleGroup.Item` renders the Ark item directly (styled like `Toggle`) instead of
  wrapping a `Toggle`, so it now carries `data-scope="toggle-group"` / `data-part="item"`. The
  shorthand applies `classNames.base` / `classNames.item` (previously leaked to the DOM).
- Updated dependencies [12b7fcd]
- Updated dependencies [ab23cda]
- Updated dependencies [68aa748]
- Updated dependencies [fc4ea2f]
- Updated dependencies [914b1de]
- Updated dependencies [d10ee2b]
- Updated dependencies [dfa00fa]
- Updated dependencies [8c1ba8e]
- Updated dependencies [6454903]
- Updated dependencies [804b60e]
- Updated dependencies [179a336]
- Updated dependencies [cddebff]
- Updated dependencies [01c885e]
- Updated dependencies [19fb071]
- Updated dependencies [51f0b4a]
- Updated dependencies [2fc35e7]
- Updated dependencies [0308f2f]
- Updated dependencies [7da3fb1]
- Updated dependencies [c1c42dd]
- Updated dependencies [3457a73]
- Updated dependencies [5ac6d3a]
- Updated dependencies [e304eff]
- Updated dependencies [349ace9]
  - @pisagor/contracts@1.0.0
  - @pisagor/utils@0.3.0
  - @pisagor/tokens@0.4.0
  - @pisagor/recipes@0.3.1

## 0.2.1

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/props@0.2.0
  - @pisagor/recipes@0.3.0
  - @pisagor/tokens@0.3.0
  - @pisagor/utils@0.2.0

## 0.2.0

### Minor Changes

- 2664c371: Initial release of accessible Solid UI components built on Ark UI and Tailwind CSS (API parity with `@pisagor/react`), including optional `recipe` prop for style overrides and Surface / Frame form-control fills via `useFormControlSurface`.
- 444b4b08: Export `./styles` entry point for package CSS.
- Export public `./hooks`, `./utils`, `./utils/*`, and `./icons` (via `@squidlab/phosphor-solid`) entry points.

### Patch Changes

- Updated dependencies [2df1c31]
  - @pisagor/tokens@0.2.0
  - @pisagor/recipes@0.2.0
