# @pisagor/vue

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
- 349ace9: Trim redundant subpath exports. Subpaths remain only where they are genuinely separate: CSS (`./styles`), hooks and utils (`./hooks`, `./utils`), and heavy modules (`./data-grid`, `./data-table`, `./phone-input`, `./rich-text-editor`).
  
  **Breaking:** `@pisagor/contracts/<component>`, `@pisagor/<fw>/utils/*` and `@pisagor/<fw>/icons` are removed. Import from the package root instead (`@pisagor/contracts`, `@pisagor/<fw>/utils`), and import icons from the icon library directly: `@phosphor-icons/react`, `@phosphor-icons/vue`, `@squidlab/phosphor-solid/icons` or `phosphor-svelte`.
- 64ef561: Vue `AlertDialog` follows the thin parts + shorthand pattern (mirrors React). `AlertDialog` is now a shorthand that renders the teleport, backdrop, positioner, header and action buttons. **Breaking:** compound usage starts from `AlertDialog.Root` (`<AlertDialog>` was the root before); `Content` no longer renders the teleport / backdrop / positioner; named `AlertDialogRoot`, `AlertDialogContent`, … component exports are removed (use `AlertDialog.*`; the `*Props` types are still exported).
- 9aef2f0: Vue `Breadcrumb` parts are thin; the shorthand adds `separator` (prop or `#separator` slot,
  defaults to a caret) and applies `classNames`.
  
  **Breaking (Vue):**
  
  - `Breadcrumb.Separator` no longer renders a default caret; pass your icon or text as children.
  - `Breadcrumb.Ellipsis` no longer renders a dots icon (it keeps the localized screen-reader text);
    pass your icon as children.
- bc84ecb: Vue `Calendar` previous / next triggers are now thin (mirrors React): they keep a localized default `aria-label` but no longer render caret icons. **Breaking:** pass your own icon (e.g. `as-child` + `Button` + `PhCaretLeft`).
- 9aef2f0: Vue `Card` header parts follow the thin parts pattern (mirrors React). **Breaking:** `Card.Header` no longer takes `title` / `description` props; compose `Card.Title` / `Card.Description`.
- 9aef2f0: Vue `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and re-exports the
  Ark part prop types.
  
  **Breaking (Vue):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
  `Button` or caret / play / pause icons (slot content was previously ignored). They keep their
  localized `aria-label`s; pass `<Button>` with `as-child` and your icons (use `AutoplayIndicator`
  with a `#fallback` slot for play / pause). The shorthand still renders caret buttons.
- 529e74b: Vue `Checkbox` shorthand adds `label` (prop or slot) and `classNames` (`CheckboxContract`).
  
  **Breaking (Vue):** `Checkbox.Control` no longer renders default check / minus indicators;
  render `<Checkbox.Indicator>` (and `<Checkbox.Indicator indeterminate>`) with your icons, or use
  the shorthand. `CheckboxField` keeps its own `label` prop.
- 529e74b: Vue `CircularSlider` follows the thin parts + shorthand pattern (mirrors React). `CircularSlider` is now a shorthand (`markers`, `markersAtSteps`, `label`, `showValue`, `valuePrefix`, `valueSuffix`, `hiddenInputProps`, `classNames`); adds `CircularSlider.Root`, `Label`, `Ring`, `HiddenInput`, `Context`. **Breaking:** `Root` no longer renders the control / ring / thumb / hidden input; `Control` drops `markers`; `ValueText` drops `prefix` / `suffix`.
- 9aef2f0: Vue `Collapsible` follows the thin parts + shorthand pattern (mirrors React). `Collapsible` is now a shorthand (`trigger`, `showIndicator`, `classNames`); adds `Collapsible.Root` and `Collapsible.Body`. **Breaking:** compound usage starts from `Collapsible.Root` (`<Collapsible>` was the root before); `Indicator` no longer renders a caret icon; compose your own.
- bc84ecb: Vue `ColorPicker` follows the thin parts + shorthand pattern (mirrors React). `ColorPicker` is a shorthand (`clearable`, `variant`, `classNames`) with the default area / sliders / swatches content; every Ark part is exposed thinly (`Area`, `ChannelSlider`, `ChannelInput`, `EyeDropperTrigger`, `SwatchGroup`, …). **Breaking:** compound usage starts from `ColorPicker.Root`; `Field` was removed.
- 64ef561: Vue `Command` follows the thin parts + shorthand pattern (mirrors React). `Command` is now the shorthand; adds `Command.Root` and `Command.Control`. **Breaking:** compound usage starts from `Command.Root`; `Command.Shorthand`, `Command.DialogContent` and `Command.DialogTrigger` were removed (use `Command` and `Command.Dialog`); `Item`, `ItemGroup` and `ItemGroupLabel` are the Combobox parts; named `CommandRoot`, `CommandInput`, … component exports are removed (use `Command.*`; the `*Props` types are still exported).
- bc84ecb: Vue `DatePicker` follows the thin parts + shorthand pattern (mirrors React). `DatePicker` is now a shorthand (`clearable`, `inputProps`, `placeholder`, `size`, `variant`, `classNames`) that renders the input group, clear / calendar buttons, teleport, positioner and calendar; adds `DatePicker.Root` and `DatePicker.Positioner`, and `Control`, `Trigger`, `Input`, `ClearTrigger`, `Content`, `ValueText` and `PresetTrigger` are thin Ark parts. `vue-form` `DateField` uses the shorthand. **Breaking:** compound usage starts from `DatePicker.Root`; `Content` no longer renders the teleport / positioner; the deprecated `DatePicker.Timer` alias was removed (use `TimeInput`), along with the `DatePickerContentProps`, `DatePickerInputProps`, `DatePickerTimerProps` and `DatePickerTriggerProps` types (`DatePickerTimeInputProps` is added).
- 64ef561: Vue `Drawer`, `Dialog` and `Sheet` follow the thin parts + shorthand pattern (mirrors React). The default export is a shorthand (`trigger`, `title`, `description`, `actions`, `classNames`, …) that renders the `Teleport`, backdrop, positioner, header, body, footer and close button; compound usage starts from `.Root`. Adds `Drawer.GrabberIndicator` and `Sheet.Root`. **Breaking:** `*.Content` no longer renders the teleport, backdrop, positioner or close button; style-only wrappers were removed; named `DialogRoot`, `DrawerContent`, `SheetTitle`, … component exports and the `useDialog` helper are removed (use `Dialog.*` / `Drawer.*` / `Sheet.*`; the `*Props` types are exported).
- 529e74b: Vue `Editable` follows the thin parts + shorthand pattern (mirrors React). `Editable` is a shorthand (input / textarea, preview and localized cancel / submit controls); adds `Editable.Root`. **Breaking:** compound usage starts from `Editable.Root`; triggers no longer render icons.
- 529e74b: Vue `FileUpload` follows the thin parts + shorthand pattern (mirrors React). `FileUpload` is now a shorthand (`icon`, `title`, `description`, `trigger`, `helper`, `label`, `clearTrigger` — each also a slot — plus `dropzone`, `showList`, `classNames`, `itemClassNames`); adds `FileUpload.Root`, `Label`, `Context`. **Breaking:** compound usage starts from `FileUpload.Root`; `DropzoneIcon`, `Title`, `Description`, `Helper` and `List` were removed; `ClearTrigger` / `ItemDeleteTrigger` default a localized `aria-label`.
- 64ef561: Vue `FloatingPanel`, `Tour` and `ActionBar` follow the thin parts + shorthand pattern (mirrors React). Parts are single styled elements; the shorthand renders the teleport, positioner, header controls and buttons. Adds `.Root` and `.Positioner` parts, `Tour.Arrow` / `ArrowTip` / `Control`, and a `useTour` re-export. **Breaking:** compound usage starts from `.Root`; parts no longer render built-in buttons or icons; `FloatingPanel.Maximize` / `Minimize` / `Restore` were removed (use `FloatingPanel.StageTrigger` with `stage`); `Tour.Footer`, `Tour.NextStep`, `Tour.PreviousStep` and `Tour.Trigger` were removed (use `Tour.Control` and `Tour.ActionTrigger`); named component exports (`FloatingPanelRoot`, `TourContent`, `ActionBarBody`, …) are removed (use `.*` parts; the `*Props` types are exported).
- 66e68ad: Vue `ImageCropper` follows the thin parts + shorthand pattern (mirrors React). `ImageCropper` is now a shorthand (`src`, `alt`, `axis`, `classNames`) that renders the viewport, image, grid and eight handles; adds `ImageCropper.Root` and `Viewport`. **Breaking:** compound usage starts from `ImageCropper.Root` and must render `Viewport`; `Selection` no longer renders grids / handles.
- 529e74b: Vue `InputOTP` follows the thin parts + shorthand pattern (mirrors React). `InputOTP` is a shorthand (`length`, `groupSize`, `classNames`); adds `InputOTP.Root`, `Label`, `Control`, `Input`, `Separator`. `vue-form` `OtpField` uses the compound parts. **Breaking:** `Slot` was renamed to `Input`.
- 9aef2f0: Vue `Listbox` parts are thin (mirrors React). `Listbox.Root`, `Item`, `ItemText`, `ItemGroup`,
  `ItemGroupLabel`, `ValueText`, `ItemIndicator`, and `Empty` are Ark parts styled through the recipe
  context; the shorthand renders `items` / `collection` with `emptyText`. Re-exports the Ark part prop
  types and `createListCollection`.
  
  **Breaking (Vue):**
  
  - `Listbox.ItemIndicator` no longer renders a check icon; put your own icon inside.
  - `Listbox.ItemGroup` drops the `heading` prop; render `<Listbox.ItemGroupLabel>` inside it.
  - The shorthand no longer renders its default slot; use `Listbox.Root` for custom content.
- 9aef2f0: Vue `Marquee` parts are thin. Adds `Marquee.Viewport`; the shorthand applies `classNames` and the
  default spacing is now `calc(var(--spacing) * 4)` (matching React).
  
  **Breaking (Vue):**
  
  - `Marquee.Root` no longer renders edges and drops `showEdges` (now a shorthand prop); add
    `<Marquee.Edge side="start" />` / `<Marquee.Edge side="end" />` yourself.
  - `Marquee.Content` no longer wraps itself in the viewport; render `<Marquee.Viewport>` around it.
  - The shorthand renders `items` only (no default slot).
  - Named `MarqueeShorthand` / `MarqueeRoot` / `MarqueeContent` / `MarqueeItem` / `MarqueeEdge` exports
    are removed; use `Marquee` / `Marquee.*`.
- 64ef561: Vue `DropdownMenu` and `ContextMenu` follow the thin parts + shorthand pattern (mirrors React). Parts map 1:1 to Ark; the shorthand renders the teleport, positioner and items. Adds `.Root`, `.ArrowTip` and `.Indicator`. Icons (item indicators, submenu carets) are no longer baked into parts; pass your own. **Breaking:** compound usage starts from `.Root`; `Content` no longer renders the teleport / positioner; `SubContent` was removed (render `Positioner` / `Content` inside `Sub`); named `DropdownMenuRoot`, `ContextMenuItem`, … component exports are removed (use `DropdownMenu.*` / `ContextMenu.*`).
- 9aef2f0: Vue `NavigationMenu.Trigger` no longer renders a built-in caret (mirrors React). Add the new `NavigationMenu.Indicator` part with your own icon inside the trigger. **Breaking:** triggers render only their children.
- 529e74b: Vue `NumberInput` follows the thin parts + shorthand pattern (mirrors React). `NumberInput` is now a shorthand (`label`, `placeholder`, `inputProps`, `clearable`, `showTriggers`, `classNames`); adds `NumberInput.Root`, `Label` and `ValueText`, and parts map 1:1 to Ark. `vue-form` `NumberField` types were adjusted. **Breaking:** compound usage starts from `NumberInput.Root`; increment / decrement triggers no longer render buttons or icons.
- 66e68ad: Vue `Pagination` follows the thin parts + shorthand pattern (mirrors React). `Pagination` is a shorthand with localized previous / next buttons and ellipses; adds `Pagination.Root` and `Context`. **Breaking:** `Items` was removed (use `Pagination.Context`); `Ellipsis` and the triggers no longer render icons.
- 529e74b: Vue `PasswordInput` parts are thin 1:1 Ark wrappers; the shorthand keeps its API and adds
  `classNames` (`PasswordInputContract`). Adds `PasswordInput.Label`.
  
  **Breaking (Vue):**
  
  - `Control` and `Input` no longer render `InputGroup` / `InputGroup.Input`; pass them with
    `as-child`.
  - `VisibilityTrigger` no longer wraps itself in an `InputGroup.Addon` / button or renders eye
    icons; it keeps the localized `aria-label`. Use `PasswordInput.Indicator` (with a `#fallback`
    slot) for your eye icons.
- 64ef561: Vue `Popover`, `HoverCard` and `Tooltip` follow the thin parts + shorthand pattern (mirrors React). Each default export is a shorthand (`trigger`, content, `showArrow`, `classNames`) that renders the `Teleport`, positioner and arrow; compound usage starts from `.Root`. Adds `ArrowTip` parts and `HoverCard.Positioner`. **Breaking:** `Content` no longer renders the teleport / positioner / arrow; named `PopoverRoot`, `HoverCardContent`, … component exports are removed (use `Popover.*` / `HoverCard.*`; the `*Props` types are exported).
- 66e68ad: Vue `QrCode` follows the thin parts + shorthand pattern (mirrors React). `QrCode` is a shorthand (`overlay`, `classNames`); adds `QrCode.Root`. **Breaking:** `Download` was renamed to `DownloadTrigger`; compound usage starts from `QrCode.Root`.
- 529e74b: **Breaking (Vue):** `RadioGroup.Item` is a thin Ark item and no longer renders its control, text,
  and hidden input. Compose `ItemControl`, `ItemText`, and `ItemHiddenInput` inside it, or use the
  shorthand `items`. `RadioGroupField` is updated accordingly.
- 9aef2f0: Vue `Resizable` resize trigger is now thin (mirrors React). `ResizeTrigger` maps 1:1 to Ark with a localized default `aria-label`; adds `Resizable.ResizeTriggerHandle`. **Breaking:** `ResizeTrigger` no longer renders a handle; compose `ResizeTriggerHandle` (and your own icon).
- 9aef2f0: Vue `ScrollArea` parts are thin. Adds `ScrollArea.Content` and a styled `ScrollArea.Corner`; the
  shorthand applies `classNames.content` / `classNames.corner`.
  
  **Breaking (Vue):** `ScrollArea.Viewport` no longer wraps its children in the Ark content element;
  render `<ScrollArea.Content>` inside it.
- 529e74b: Vue `SegmentGroup` parts are thin 1:1 Ark wrappers. `ItemText`, `ItemControl`, and
  `ItemHiddenInput` are plain parts; the shorthand renders the indicator and applies `classNames`.
  
  **Breaking (Vue):**
  
  - `SegmentGroup.Root` no longer renders `Indicator`; add `<SegmentGroup.Indicator />`.
  - `SegmentGroup.Item` no longer renders text, control, or hidden input; compose `ItemText`,
    `ItemControl`, and `ItemHiddenInput` inside it.
- 9aef2f0: Vue `Sidebar` layout parts (`Inset`, `Header`, `Footer`, `Group`, `GroupLabel`, `GroupContent`, `Menu`, `MenuItem`, `MenuBadge`, `MenuSub`, `MenuSubItem`) are now thin slot-recipe parts; `SidebarMenuSubItem` is exported. The mobile sidebar renders a `Sheet` with a localized title / description and close button. **Breaking:** `Sidebar.Trigger` no longer renders a built-in `PhSidebarSimple` icon / sr-only label: it sets a localized `aria-label` and you pass the icon in its slot.
- 9aef2f0: Vue `Sortable` handle no longer renders a default icon (mirrors React); pass your own icon inside `Sortable.Handle`. **Breaking:** `Sortable.Handle` is empty by default.
- 66e68ad: Vue `Steps` follows the thin parts + shorthand pattern (mirrors React). `Steps` is now a shorthand (`items`, `completedContent` / `#completed`, `showControls`, `classNames`) that renders the list, indicators (number, then check), titles, content and localized back / next buttons; adds `Steps.Root`. **Breaking:** compound usage starts from `Steps.Root`; `Indicator` no longer renders the check icon; `PrevTrigger` / `NextTrigger` are thin.
- 529e74b: Vue `TagsInput` follows the thin parts + shorthand pattern (mirrors React). `TagsInput` is now a shorthand that renders the control, items and clear button; adds `TagsInput.Root` and `TagsInput.Label`, and parts map 1:1 to Ark with localized default `aria-label`s. **Breaking:** compound usage starts from `TagsInput.Root`; delete / clear triggers no longer render icons.
- 66e68ad: Vue `Timer` follows the thin parts + shorthand pattern (mirrors React). `Timer` is now a shorthand (`units`, `showControls`, `classNames`) with localized unit labels and play / reset buttons; adds `Timer.Root`. **Breaking:** compound usage starts from `Timer.Root`; the root `units` / `isControlsVisible` props were removed.
- 9aef2f0: Vue `TreeView` follows the thin parts + shorthand pattern (mirrors React). `TreeView` is now a shorthand that renders the whole `collection` (`label`, `checkbox`, `fileIcons`, `itemIcon`, `branchIcon`, `branchExpandedIcon`, `classNames`, `branchClassNames`, `itemClassNames`); adds `TreeView.Root`, `BranchText`, `BranchTrigger`, `BranchIndentGuide`, `NodeCheckboxIndicator`, `NodeRenameInput`, `Context`, `NodeContext`. **Breaking:** compound usage starts from `TreeView.Root`; `BranchControl` / `ItemText` / `NodeCheckbox` no longer render indicators, icons, text wrappers or rename inputs; `BranchContent` no longer renders the indent guide; `fileIcons` moved to the shorthand; `TreeViewNodeInput` became `NodeRenameInput` and the `TreeViewItemTitle` export was removed.

### Patch Changes

- 529e74b: Vue `ToggleGroup.Item` renders the Ark item directly (styled like `Toggle`) instead of wrapping a
  `Toggle`, so it now carries `data-scope="toggle-group"` / `data-part="item"`. The shorthand applies
  `classNames.base` / `classNames.item`. Also fixes `provide()` / `inject()` warnings by running them
  in `setup()`, and merges the user `style` with the `--gap` variable.
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
