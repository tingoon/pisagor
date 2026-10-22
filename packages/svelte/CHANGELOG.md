# @pisagor/svelte

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
- 8e0555e: Svelte `AlertDialog` follows the thin parts + shorthand pattern (mirrors React and Solid). The shorthand renders portal, backdrop, positioner, header, scrollable body and footer; `Action` / `Cancel` stay as semantic close-trigger buttons. **Breaking:** `AlertDialog.Content` no longer portals or renders backdrop/positioner and `AlertDialog.Header` no longer takes `title` / `description`.
- b7b6de2: Svelte `Breadcrumb` parts are thin; the shorthand adds a `separator` snippet (defaults to a caret) and now applies `classNames` (`base` / `list` / `separator`). `Breadcrumb.Root` is styled via the `base` slot.
  
  **Breaking (Svelte):**
  
  - `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
  - `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
    pass your icon as children.
- b7b6de2: Svelte `Card.Header` is now a thin part and no longer accepts `title` / `description` props. Compose `<Card.Title>` and `<Card.Description>` as children.
- b7b6de2: Svelte `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator`.
  
  **Breaking (Svelte):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
  `Button` or caret / play / pause icons. They keep their localized `aria-label`s; pass a `<Button>`
  via the `asChild` snippet and your icons (use `AutoplayIndicator` for play / pause). The shorthand
  still renders caret buttons.
- 54013f2: Svelte `Checkbox` shorthand adds `label` and `classNames` (`CheckboxContract`).
  
  **Breaking (Svelte):** `Checkbox.Control` no longer renders default check / minus indicators;
  render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
  the shorthand. The shorthand no longer accepts `children`.
- 54013f2: Svelte `CircularSlider` follows the thin parts + shorthand pattern (mirrors React and Solid). The shorthand gains `label`, `showValue`, `valuePrefix`, `valueSuffix` and `classNames`; new parts `Root`, `Label`, `Ring`, `HiddenInput` and `Context`. **Breaking:** `CircularSlider.Control` no longer renders the ring, markers and thumb; `CircularSlider.ValueText` no longer takes `prefix`/`suffix`; `Root` no longer renders `Control` or the hidden input; the old progress ring part is replaced by `Ring`.
- b7b6de2: Svelte `Collapsible` follows the thin parts + shorthand pattern (mirrors React and Solid). `Collapsible` is now a shorthand (`trigger`, `showIndicator`, `classNames`, children as the body); adds `Collapsible.Root` and `Collapsible.Body`. **Breaking:** compound usage starts from `Collapsible.Root`; `Content` no longer renders an inner `div` with your `class` (wrap children in `Collapsible.Body`); `Indicator` no longer renders a caret icon (pass your own).
- 5aabd6c: Svelte `ColorPicker` follows the thin parts + shorthand pattern (mirrors React and Solid). `ColorPicker` is now the shorthand (the former `ColorPicker.Field`: swatch trigger, hex input, `clearable`, `variant`, `classNames`; children replace the default popover content). Parts map 1:1 to Ark; adds `Root`, `Positioner`, `AreaBackground`, `ChannelSliderTrack`, `ChannelSliderThumb`, `ChannelSliderLabel`, `ChannelSliderValueText` and `FormatTrigger`; `SwatchPreview` stays. **Breaking:** compound usage starts from `ColorPicker.Root` and you render `Portal` and `Positioner` yourself; `ColorPicker.Field` is removed; `Area` no longer renders `AreaBackground`; `ChannelSlider` no longer renders its track and thumb; `ClearTrigger` is a bare button that no longer wraps itself in an addon, renders an icon or hides itself; `variant` / `clearable` move from the root to the shorthand.
- 8e0555e: Svelte `Command` is now the shorthand (`items`, `placeholder`, `emptyText`, `footer`, `classNames`); `Command.Shorthand` is removed (mirrors React and Solid). `Command.Dialog` is a shorthand that renders the dialog chrome (`trigger` snippet, hidden `title` / `description`) around its children. **Breaking:** compound usage starts from `Command.Root`; `Command.Input` is the plain combobox input (wrap it in `Command.Control` and compose the search icon yourself, e.g. `InputGroup` with `Command.Input asChild`); `Command.List` no longer adds a height-capped wrapper; `Command.Empty` no longer falls back to the default message; `Command.ItemGroup` drops `heading` (use `Command.ItemGroupLabel`); `Command.DialogTrigger` and `Command.DialogContent` are removed; `CommandShorthandItem` / `CommandShorthandProps` are now `CommandItem` / `CommandProps`.
- 5aabd6c: Svelte `DatePicker` follows the thin parts + shorthand pattern and `Calendar.PrevTrigger` / `Calendar.NextTrigger` are thin (mirrors React and Solid). `DatePicker` is a shorthand (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`; children replace the default calendar) that renders the input, calendar trigger, portal, positioner and default calendar; adds `DatePicker.Positioner`. **Breaking:** compound usage starts from `DatePicker.Root` and you render `Portal` and `Positioner` yourself; `Content` no longer renders a default calendar; `Input` is the bare Ark input; `Trigger` is no longer wrapped in `Control`; `ClearTrigger` no longer hides itself or renders an icon; `TimeInput` drops `clearable`; the deprecated `DatePicker.Timer` alias is removed. Calendar nav triggers no longer render a button or icon: pass your own with `asChild` (the localized `aria-label` stays). `@pisagor/svelte-form` `DateField` uses the new parts.
- 8e0555e: Svelte `Drawer`, `Dialog` and `Sheet` follow the thin parts + shorthand pattern (mirrors React and Solid). The default export is a shorthand (`trigger`, `title`, `description`, `actions`, `scrollFade`, `showCloseButton`, `classNames`) that renders the portal, backdrop, positioner, header, scrollable body, footer and close button. Every part is a single styled element built with `withProvider` / `withContext`; compound usage starts from `.Root`.
  
  **Breaking (Svelte):** `*.Content` no longer renders `Portal`, backdrop, positioner, grabber or close button; `*.Body` no longer wraps `ScrollArea`; `*.Header` no longer takes `title` / `description`; variants (`size`, `placement`, `variant`, …) move to `.Root`.
- 54013f2: Svelte `Editable` follows the thin parts + shorthand pattern (mirrors React and Solid). `Editable` is now a shorthand (`multiline`, `showControls`, `size`, `placeholder`, `classNames`) that renders the input or textarea, preview and cancel / submit buttons. Parts map 1:1 to Ark. **Breaking:** `Editable` (bare) is no longer the root; compound usage starts from `Editable.Root`.
- 54013f2: Svelte `FileUpload` follows the thin parts + shorthand pattern (mirrors React and Solid). `FileUpload` is now a shorthand (`label`, `title`, `description`, `helper`, `icon`, `dropzone`, `trigger`, `clearTrigger`, `showList`, `classNames`, `itemClassNames`); `trigger`/`clearTrigger` accept a snippet receiving the trigger props. Adds `Root`, `Label` and `Context` parts; `ClearTrigger` and `ItemDeleteTrigger` get localized default `aria-label`s. **Breaking:** compound usage starts from `FileUpload.Root`; the invented `DropzoneIcon`, `Title`, `Description`, `Helper` and `List` parts are removed (use the shorthand or plain elements).
- 8e0555e: Svelte `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern (mirrors React and Solid). The default exports are shorthands (`trigger` takes a snippet that receives the trigger props); parts map 1:1 to Ark (or to the custom ActionBar state) and `ActionBar.Positioner` is added. **Breaking:** compound usage starts from `.Root` and you render `Portal` and `Positioner` yourself. FloatingPanel `Minimize` / `Maximize` / `Restore` are removed (use `StageTrigger` with your own icons) and `Header`, `Body` and `Content` no longer add the drag trigger, scroll area or resize handles. `Tour.Root` takes `tour` (from `useTour`) instead of `steps`; `Trigger`, `Footer`, `PreviousStep`, `NextStep` and the step `Actions` helper are removed (use `Tour.Control`, `Tour.Actions` and `Tour.ActionTrigger`); `useTourContext` is Ark's and returns the tour API accessor. `ActionBar.Root` no longer renders the `count` / `actions` preset and `ActionBar.Content` no longer portals or animates.
- d1e4a95: Svelte `ImageCropper` follows the thin parts + shorthand pattern (mirrors React and Solid): `ImageCropper` is a shorthand (`src`, `alt`, `axis`, `classNames`) with `Root`, `Viewport`, `Image`, `Selection`, `Grid` and `Handle` parts. **Breaking:** compound usage starts from `ImageCropper.Root`; `Root` no longer takes `src` / `alt` or renders the viewport, image and selection (compose `ImageCropper.Viewport` yourself).
- 54013f2: Svelte `InputOTP` follows the thin parts + shorthand pattern (mirrors React and Solid). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`. `@pisagor/svelte-form` `OTPField` uses the new parts.
- b7b6de2: Svelte `Listbox` parts are thin `withProvider` / `withContext` wrappers.
  
  **Breaking (Svelte):**
  
  - `Listbox.ItemIndicator` no longer renders a default check icon; pass your icon as children.
  - `Listbox.ItemGroup` no longer accepts `heading`; render `<Listbox.ItemGroupLabel>` inside it.
- b7b6de2: Svelte `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames` and
  takes `showEdges`.
  
  **Breaking (Svelte):**
  
  - `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
    `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
  - `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
- 8e0555e: Svelte `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern (mirrors React and Solid). Menu parts map 1:1 to Ark and keep `data-scope="menu"`; the default exports are shorthands (`trigger`, `showArrow`, `classNames`) that render the portal, positioner and content. **Breaking:** `*.Content` no longer portals or renders the positioner; checkbox / radio / trigger items no longer bake icons — compose `ItemIndicator`, `ItemText` and `Indicator` with your own icons; compound usage starts from `.Root`.
- b7b6de2: Svelte `NavigationMenu.Trigger` no longer renders a built-in caret. Add the new `NavigationMenu.Indicator` part with your own icon: `<NavigationMenu.Trigger>Products<NavigationMenu.Indicator><CaretDownIcon /></NavigationMenu.Indicator></NavigationMenu.Trigger>`.
- 54013f2: Svelte `NumberInput` follows the thin parts + shorthand pattern (mirrors React and Solid). `NumberInput` is now a shorthand (`label`, `placeholder`, `clearable`, `showTriggers`, `inputProps`, `classNames`); adds `NumberInput.Label` and `NumberInput.ValueText`. **Breaking:** compound usage starts from `NumberInput.Root`; `Input` is the bare Ark input (use `asChild` with `Input`); `DecrementTrigger` / `IncrementTrigger` no longer render a button or icon; `Scrubber` no longer wraps a label; `Control` drops `clearable` (set `data-clearable` yourself).
- d1e4a95: Svelte `Pagination` follows the thin parts + shorthand pattern (mirrors React and Solid). `Pagination` is now a shorthand (`classNames`) that renders the localized previous / next buttons, page items and ellipses; adds `Pagination.Context`. **Breaking:** compound usage starts from `Pagination.Root`, which no longer renders default children; `PrevTrigger`, `NextTrigger` and `Item` are the bare Ark parts (use `asChild` with your own button and icons); `Ellipsis` no longer renders an icon; `Pagination.Items` is removed (use `Pagination.Context`).
- 54013f2: Svelte `PasswordInput` parts are thin and 1:1 with Ark (mirrors React). `Root`, `Label` (new), `Control`, `Input`, `VisibilityTrigger` and `Indicator` (new) only style; the shorthand gains `classNames`, `indicatorProps` and `visibilityTriggerProps`. **Breaking:** `PasswordInput.Control` no longer renders an `InputGroup`, `PasswordInput.Input` no longer renders `InputGroup.Input`, and `PasswordInput.VisibilityTrigger` no longer renders its addon, button or eye icons; compose them with `asChild` snippets (see the compound example).
- 8e0555e: Svelte `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern (mirrors React and Solid). `Popover` and `HoverCard` default exports are shorthands (`trigger`, `title`, `description`, `actions`, `showArrow`, `showCloseButton`, `classNames`); compound usage starts from `.Root` and renders `Portal` + `.Positioner` itself. Tooltip parts (`Root`, `Trigger`, `Positioner`, `Content`, `Arrow`, `ArrowTip`) are recipe-aware `withProvider` / `withContext` parts. **Breaking:** `Popover.Content` / `HoverCard.Content` no longer portal or render the positioner, arrow or close button; `Popover.Header` no longer takes `title` / `description`.
- d1e4a95: Svelte `QrCode` follows the thin parts + shorthand pattern (mirrors React and Solid). `QrCode` is now a shorthand (`overlay`, `classNames`) that renders the frame and pattern; adds `QrCode.Root`, `QrCode.Pattern` and `QrCode.DownloadTrigger`. **Breaking:** compound usage starts from `QrCode.Root`; `Frame` no longer renders the pattern; `QrCode.Download` is renamed `QrCode.DownloadTrigger`.
- 54013f2: **Breaking (Svelte):** `RadioGroup.Item` is a thin Ark item and no longer renders its control,
  text, and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or
  use the shorthand `items`. `tabindex` on `Item` now applies to the item root; set it on
  `ItemHiddenInput` instead. `RadioGroup.ItemHiddenInput` is now the Ark part.
- b7b6de2: Svelte `Resizable.ResizeTrigger` is now a thin part: the `withHandle` prop is removed and it no longer renders a default indicator or grip icon. Compose `<Resizable.ResizeTriggerIndicator />` or the new `<Resizable.ResizeTriggerHandle><DotsSixVerticalIcon /></Resizable.ResizeTriggerHandle>` as children.
- b7b6de2: Svelte `ScrollArea` parts are thin. Adds `ScrollArea.Content` and `ScrollArea.Corner`; the
  shorthand applies `classNames.content` / `classNames.corner`.
  
  **Breaking (Svelte):** `ScrollArea.Viewport` no longer wraps its children in the Ark content
  element; render `<ScrollArea.Content>` inside it.
- 54013f2: Svelte `SegmentGroup` parts are thin 1:1 Ark wrappers. Adds `ItemText`, `ItemControl` and
  `ItemHiddenInput`; the shorthand now applies `classNames`.
  
  **Breaking (Svelte):**
  
  - `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
  - `SegmentGroup.Item` no longer renders text, control, or hidden input; compose `ItemText`,
    `ItemControl`, and `ItemHiddenInput` inside it.
- b7b6de2: Svelte `Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts. `Sidebar.Trigger` no longer renders a built-in `SidebarSimpleIcon` / sr-only label: it sets a localized `aria-label` and you pass the icon as children.
- b7b6de2: Svelte `Sortable.Handle` no longer renders a default `DotsSixVerticalIcon`; pass your own icon as children.
- d1e4a95: Svelte `Steps` follows the thin parts + shorthand pattern (mirrors React and Solid). `Steps` is now a shorthand (`items`, `completedContent`, `showControls`, `classNames`) that renders the list, indicators (number, then check), titles, content and localized back / next buttons. **Breaking:** compound usage starts from `Steps.Root`; `Indicator` no longer renders the label / check icon (compose your own).
- 54013f2: Svelte `TagsInput` follows the thin parts + shorthand pattern (mirrors React and Solid). `TagsInput` is now a shorthand (`placeholder`, `clearable`, `size`, `variant`, `classNames`) that renders the tag items, input and clear button; adds `TagsInput.RootProvider` and `TagsInput.Label`. **Breaking:** compound usage starts from `TagsInput.Root` (or `TagsInput.RootProvider`), which no longer renders a control or items; `Control` is the bare Ark control (use `asChild` with `InputGroup`); `Item` no longer renders its preview, text, delete trigger or input; `ItemDeleteTrigger`, `ClearTrigger`, `Input` and `ItemInput` no longer render buttons, icons or input groups.
- d1e4a95: Svelte `Timer` follows the thin parts + shorthand pattern (mirrors React and Solid). `Timer` is now a shorthand (`units` with localized labels, `showControls`, `classNames`); adds `Timer.Root`. `Timer.Play` now switches between pause, resume and start. **Breaking:** compound usage starts from `Timer.Root`, which no longer renders units or controls; `isControlsVisible` is replaced by the shorthand `showControls`.
- b7b6de2: Svelte `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole tree from `collection` (`label`, `checkbox`, `branchIcon`, `branchExpandedIcon`, `itemIcon`, `fileIcons`, `classNames`, `branchClassNames`, `itemClassNames`; node `icon` / `expandedIcon` still apply). Parts are 1:1 with Ark and no longer bake icons: `BranchControl`, `BranchIndicator`, `BranchContent`, `ItemText` and `NodeCheckbox` render only their children; new `Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `NodeContext` and `Context` parts. **Breaking:** compound usage starts from `TreeView.Root` (previously `TreeView` itself was the root); `fileIcons` moved from the root to the shorthand; the `icon` / `expandedIcon` props on `BranchControl` / `ItemText` are removed (render icons as children).
- 349ace9: Trim redundant subpath exports. Subpaths remain only where they are genuinely separate: CSS (`./styles`), hooks and utils (`./hooks`, `./utils`), and heavy modules (`./data-grid`, `./data-table`, `./phone-input`, `./rich-text-editor`).
  
  **Breaking:** `@pisagor/contracts/<component>`, `@pisagor/<fw>/utils/*` and `@pisagor/<fw>/icons` are removed. Import from the package root instead (`@pisagor/contracts`, `@pisagor/<fw>/utils`), and import icons from the icon library directly: `@phosphor-icons/react`, `@phosphor-icons/vue`, `@squidlab/phosphor-solid/icons` or `phosphor-svelte`.

### Patch Changes

- 54013f2: Svelte `ToggleGroup` shorthand applies `classNames.base` / `classNames.item` (previously ignored).
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

- 4e63c777: Initial release of accessible Svelte UI components built on Ark UI and Tailwind CSS (API parity with `@pisagor/react`), including optional `recipe` prop for style overrides and Surface / Frame form-control fills via `useFormControlSurface`.
- Export public `./icons` (via `phosphor-svelte`) and `./utils/*` entry points (`./hooks` and `./utils` were already exported).

### Patch Changes

- Updated dependencies [2df1c31]
  - @pisagor/tokens@0.2.0
  - @pisagor/recipes@0.2.0
