# @pisagor/react

## 1.0.0

### Major Changes

- 7da3fb1: **Breaking:** Rename `@pisagor/props` to `@pisagor/contracts`. Update imports:
  
  ```ts
  import type { ButtonRootContract } from "@pisagor/contracts";
  ```

### Minor Changes

- 76eb64c: React `AlertDialog` follows the thin parts + shorthand pattern. The shorthand takes `trigger`,
  `title`, `description`, `actions`, children (body), `scrollFade`, `showCloseButton` and
  `classNames` and renders the portal, backdrop, positioner, header, scrollable body and footer.
  `Action` and `Cancel` stay as semantic parts.
  
  **Breaking (React):** compound usage starts from `AlertDialog.Root` and you render `Portal`,
  `Backdrop` and `Positioner` yourself. `Content` no longer renders the corner close button
  (`showCloseButton` moved to the shorthand), `Body` no longer wraps children in `ScrollArea`
  (`scrollFade` moved to the shorthand) and `Header` no longer takes `title` / `description`.
  Named `AlertDialogRoot`, `AlertDialogContent`, … function exports are removed; use
  `AlertDialog.*`. Parts now carry `data-scope="alert-dialog"`.
  
  `alertDialogRecipe` gains empty `base`, `trigger` and `closeTrigger` slots.
- c25a70b: React `Breadcrumb` parts are thin; the shorthand adds `separator` (defaults to a caret) and now
  applies `classNames`. Adds a `base` recipe slot for the root.
  
  **Breaking (React):**
  
  - `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
  - `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
    pass your icon as children.
- c8ae77a: `Calendar.PrevTrigger` / `Calendar.NextTrigger` are now thin parts (localized `aria-label` only) and no longer render a built-in ghost button and caret icon. Pass your own: `<Calendar.PrevTrigger asChild><Button size="icon-md" variant="ghost"><CaretLeftIcon className="rtl:rotate-180" /></Button></Calendar.PrevTrigger>`. `DatePicker`'s default calendar still renders them.
- 918ebb4: `Card.Header` is now a thin part and no longer accepts `title` / `description` props. Compose `<Card.Title>` and `<Card.Description>` as children.
- 3fabd88: React `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and
  `autoplayIndicator` / `autoplayTrigger` recipe slots.
  
  **Breaking (React):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
  `Button` or caret / play / pause icons (children were previously ignored). They keep their
  localized `aria-label`s; pass `<Button>` with `asChild` and your icons (use
  `AutoplayIndicator` for play / pause). The shorthand still renders caret buttons.
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
- 595c0ef: React `Command` is now the shorthand (`items`, `placeholder`, `emptyText`, `footer`,
  `classNames`); `Command.Shorthand` is removed. `Command.Dialog` is a shorthand that renders the
  dialog chrome (`trigger`, hidden `title` / `description`) around its children.
  
  **Breaking (React):**
  
  - Compound usage starts from `Command.Root`.
  - `Command.Input` is the plain combobox input: wrap it in `Command.Control` and compose the
    search icon yourself (for example with `InputGroup` and `Command.Input asChild`).
  - `Command.List` no longer adds a height-capped wrapper.
  - `Command.Empty` no longer falls back to the default message (the shorthand still does).
  - `Command.DialogTrigger` and `Command.DialogContent` are removed; pass `trigger` and children
    to `Command.Dialog`.
  - Named `CommandRoot`, `CommandInput`, … function exports are removed; `CommandShorthandItem` is
    now `CommandItem` and `CommandShorthandProps` is now `CommandProps`.
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
- ac95842: React `Dialog` and `Sheet` follow the thin parts + shorthand pattern. The shorthand (`Dialog`,
  `Sheet`) takes `trigger`, `title`, `description`, `actions`, `scrollFade`, `showCloseButton` and
  `classNames` and renders the portal, backdrop (modal only), positioner, header, scrollable body,
  footer and corner close button. Every part is a single styled element built with
  `withProvider` / `withContext`.
  
  **Breaking (React):** compound usage starts from `Dialog.Root` / `Sheet.Root`, and you render
  `Portal`, `Backdrop` and `Positioner` yourself (`Sheet.Content` no longer adds them).
  `Content` no longer renders the corner close button (`showCloseButton` moved to the shorthand).
  `Body` no longer wraps its children in `ScrollArea` (`scrollFade` moved to the shorthand).
  `Header` no longer takes `title` / `description`. Variants moved to the root: Dialog `size` /
  `bottomStickOnMobile` and Sheet `placement` / `variant`. Named `DialogRoot`, `DialogContent`,
  `SheetRoot`, … function exports are removed; use `Dialog.*` / `Sheet.*`. `Sidebar` props are now
  plain `div` props (they used to include unused sheet root props).
  
  `dialogRecipe` gains empty `base`, `trigger` and `closeTrigger` slots; `sheetRecipe` gains an
  empty `base` slot.
- 99e3673: React `Drawer` now follows the thin parts + shorthand pattern. `Drawer` is a shorthand that
  takes `trigger`, `title`, `description`, `actions`, `scrollFade` and `classNames` and renders
  the portal, backdrop, positioner, grabber, header, scrollable body and footer for you. Every
  part (`Drawer.Root`, `Trigger`, `Backdrop`, `Positioner`, `Content`, `Grabber`,
  `GrabberIndicator`, `ContentInner`, `Header`, `Title`, `Description`, `Body`, `Footer`,
  `CloseTrigger`) is a single styled element built with `withProvider` / `withContext`.
  
  **Breaking (React):** `Drawer.Content` no longer renders `Portal`, `Backdrop`, `Positioner` or
  the grabber; `Drawer.Body` no longer wraps its children in `ScrollArea` (`scrollFade` moved to the
  shorthand); `Drawer.Header` no longer takes `title` / `description`. `variant` moved from
  `Drawer.Content` / `Drawer.Positioner` to `Drawer.Root`, and placement always follows
  `swipeDirection`. Compound usage starts from `Drawer.Root`. The named `DrawerRoot`,
  `DrawerContent`, … function exports are removed; use `Drawer.*`.
  
  `drawerRecipe` gains empty `base`, `trigger` and `closeTrigger` slots so every part has a slot.
  
  In React, `Drawer.Grabber` (the drag hit area) uses the `grabberWrapper` slot and
  `Drawer.GrabberIndicator` (the visible bar) uses the `grabber` slot; `grabberIcon` is unused there.
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
- 8c1ba8e: React `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern.
  
  - `FloatingPanel` is a shorthand: `trigger`, `title`, `icon`, children (scrollable body),
    `actions`, `scrollFade`, `resizable`, `showStageControls` and `showCloseButton`. Parts map 1:1
    to Ark (`Positioner`, `DragTrigger`, `StageTrigger`, `ResizeTrigger` are exposed).
  - `Tour` is a shorthand: `steps` (and every `useTour` option), `trigger`, children,
    `showArrow`, `showCloseButton` and `classNames`. Compound usage is Ark's: create the tour
    with `useTour` and pass it to `Tour.Root tour={tour}`. `useTour` and `useTourContext` are
    re-exported from Ark.
  - `ActionBar` is a shorthand: `trigger`, `count`, `actions`, children (extra body content) and
    `showCloseButton`. Adds `ActionBar.Positioner`.
  
  **Breaking (React):**
  
  - Compound usage starts from `.Root`, and you render `Portal` and `Positioner` yourself.
  - FloatingPanel: `Minimize`, `Maximize` and `Restore` are removed (use `StageTrigger` with your
    own icons). `Header` no longer wraps itself in `DragTrigger`, `Body` no longer adds
    `ScrollArea`, and `Content` no longer adds resize handles (`resizable` moved to the shorthand).
  - Tour: `Tour.Root` takes `tour` instead of `steps`. `Trigger`, `Footer`, `PreviousStep`,
    `NextStep` and the step-action `Actions` helper are removed; use `Tour.Control` with
    `Tour.Actions` (Ark render prop) and `Tour.ActionTrigger`. `Content` no longer adds the
    backdrop, spotlight, default layout or close button. `useTourContext` now returns the tour
    API directly (it used to return `{ tour, … }`).
  - ActionBar: `ActionBar.Root` no longer renders the `count` / `actions` preset (moved to the
    shorthand) and `Content` no longer portals or animates (use `Positioner`).
  - Named `FloatingPanelRoot`, `TourRoot`, … function exports are removed. ActionBar keeps its
    named exports.
  
  Recipes gain empty slots for the new parts. Tour gains `header`, `body` and `control` slots.
  Adds the `floatingPanel.close` message.
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
- a8e3f40: React `Listbox` parts are thin `withProvider` / `withContext` wrappers.
  
  **Breaking (React):** `Listbox.ItemIndicator` no longer renders a default check icon; pass your
  icon as children.
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
- 9bb1531: React `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames`.
  
  **Breaking (React):**
  
  - `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
    `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
  - `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
  - Named `MarqueeContent` / `MarqueeItem` / `MarqueeEdge` exports are removed; use `Marquee.*`.
- 0bc32c9: React `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern. `DropdownMenu`
  is now a shorthand (`trigger`, children, `showArrow`, `classNames`) and `ContextMenu` is a
  shorthand (`trigger` area content, children, `classNames`). Every part maps 1:1 to an Ark menu
  part and keeps `data-scope="menu"`. Adds the Ark `Indicator` and `ArrowTip` parts.
  
  **Breaking (React):**
  
  - Compound usage starts from `DropdownMenu.Root` / `ContextMenu.Root`, and you render `Portal`
    and `Positioner` yourself (`Content` no longer adds them).
  - `SubContent` is removed: inside `Sub`, render `Portal` > `Positioner` > `Content`.
  - `CheckboxItem` / `RadioItem` no longer render the check icon and label: compose
    `<ItemIndicator><CheckIcon /></ItemIndicator>` and `<ItemText>`. `ItemIndicator` has no
    default icon.
  - `TriggerItem` no longer renders a caret: add `<Indicator><CaretRightIcon /></Indicator>`.
  - The `recipe` prop moves from `Content` to the root (`Root` / `Sub`).
  - Named `DropdownMenuRoot`, `ContextMenuRoot`, … function exports are removed.
  - `AlertDialog.Trigger` keeps `data-scope="dialog"` so focus returns to the trigger on close.
  
  `dropdownMenuRecipe` gains `arrow`, `base`, `itemGroup`, `radioItemGroup` and `trigger` empty
  slots and an `indicator` slot.
- d772e11: `NavigationMenu.Trigger` no longer renders a built-in caret. Add the new `NavigationMenu.Indicator` part with your own icon: `<NavigationMenu.Trigger>Products<NavigationMenu.Indicator><CaretDownIcon /></NavigationMenu.Indicator></NavigationMenu.Trigger>`.
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
- 0942cab: React parts no longer bake in icons; pass your own (shorthands keep their defaults).
  
  **Breaking (React):**
  
  - `Collapsible.Indicator` no longer renders a caret.
  - `TreeView.BranchIndicator` no longer renders a caret.
  - `Pagination.Ellipsis` no longer renders a dots icon.
  - `Steps.Indicator` now renders only its children; the completed check (and label hiding) moved
    to the `Steps` shorthand.
- 19fb071: React `PasswordInput` parts are thin 1:1 Ark wrappers; the shorthand keeps its API and adds
  `classNames` (`PasswordInputContract`). Adds `PasswordInput.Label` and `indicator` / `input` /
  `label` / `visibilityTrigger` recipe slots.
  
  **Breaking (React):**
  
  - `Control` and `Input` no longer render `InputGroup` / `InputGroup.Input`; pass them with
    `asChild`.
  - `VisibilityTrigger` no longer wraps itself in an `InputGroup.Addon` / button or renders eye
    icons; it keeps the localized `aria-label`.
  - `PasswordInput.Root` accepts all Ark root props.
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
- 2fc35e7: Split `Provider` into composable `Provider.Locale` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, and `useProvider` reads the resolved values.
  
  **Breaking:** `useProviderMessage` and React's `getMessage` are replaced by `useLocale().m`. Migrate `prop ?? getMessage(key)` to `const { m } = useLocale();` and `m(key, prop)`.
- 0308f2f: React `QrCode` follows the thin parts + shorthand pattern. `QrCode` is now a shorthand
  (`overlay`, `classNames`) that renders the frame and pattern. Adds `QrCode.Root`, `Pattern`,
  `DownloadTrigger`, and `QrCodeContract`.
  
  **Breaking (React):**
  
  - Compound usage starts from `QrCode.Root`, which no longer auto-renders a frame.
  - `Frame` no longer renders `Pattern`; add `<QrCode.Pattern />`.
  - `QrCode.Download` is renamed to `QrCode.DownloadTrigger` (Ark name).
  - Named `QrCodeRoot`, `QrCodeFrame`, `QrCodeOverlay`, and `QrCodeDownload` exports are removed.
- 507a1d6: **Breaking (React):** `RadioGroup.Item` is a thin Ark item and no longer renders its control,
  text, and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or
  use the shorthand `items`. `tabIndex` on `Item` now applies to the item root; set it on
  `ItemHiddenInput` instead.
- 7e8a844: `Resizable.ResizeTrigger` is now a thin part: the `withHandle` prop is removed and it no longer renders a default indicator or grip icon. Compose `<Resizable.ResizeTriggerIndicator />` or the new `<Resizable.ResizeTriggerHandle><DotsSixVerticalIcon /></Resizable.ResizeTriggerHandle>` as children.
- abf9420: React `ScrollArea` parts are thin. Adds `ScrollArea.Content` and `content` / `corner` recipe
  slots; the shorthand applies `classNames.content` / `classNames.corner`.
  
  **Breaking (React):** `ScrollArea.Viewport` no longer wraps its children in the Ark content
  element; render `<ScrollArea.Content>` inside it.
- c7b63f1: React `SegmentGroup` parts are thin 1:1 Ark wrappers. Adds `ItemText`, `ItemControl`,
  `ItemHiddenInput`, and an `itemControl` recipe slot; the shorthand now applies `classNames`.
  
  **Breaking (React):**
  
  - `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
  - `SegmentGroup.Item` no longer renders text, control, or hidden input and drops `text`; compose
    `ItemText`, `ItemControl`, and `ItemHiddenInput` inside it.
  - Named `SegmentGroupIndicator` / `SegmentGroupItem` exports are removed; use `SegmentGroup.*`.
- fafc9fd: `Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts. `Sidebar.Trigger` no longer renders a built-in `SidebarSimpleIcon` / sr-only label: it sets a localized `aria-label` and you pass the icon as children.
- d07dfcd: `Sortable.Handle` no longer renders a default `DotsSixVerticalIcon`; pass your own icon as children.
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

- e5afe8e: React `ToggleGroup.Item` renders the Ark item directly (styled like `Toggle`) instead of
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

## 0.3.0

### Minor Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.
- 7493c27: Add `@pisagor/mcp` and ship Intent skills plus `catalog.gen.json` with UI packages for agent tooling.

### Patch Changes

- Updated dependencies [9e60302]
- Updated dependencies [7493c27]
  - @pisagor/props@0.2.0
  - @pisagor/recipes@0.3.0
  - @pisagor/tokens@0.3.0
  - @pisagor/utils@0.2.0

## 0.2.0

### Minor Changes

- 2df1c31: Mute page chrome and raise form-control fills from Surface / Frame context via `useFormControlSurface`.

### Patch Changes

- Updated dependencies [2df1c31]
  - @pisagor/tokens@0.2.0
  - @pisagor/recipes@0.2.0

## 0.1.1

### Patch Changes

- e1c330f: Add optional `recipe` prop for style overrides on components.
