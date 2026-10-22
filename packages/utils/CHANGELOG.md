# @pisagor/utils

## 0.3.0

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

### Patch Changes

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
- c1c42dd: React `Steps` follows the thin parts + shorthand pattern. `Steps` is now an items-driven shorthand
  (`items`, `completedContent`, `showControls`, `classNames`) with localized back/next buttons.
  `PrevTrigger` / `NextTrigger` are styled thin parts. Adds `Steps.Root`, `StepsPresetItem`,
  `StepsContract`, and the `steps.next` / `steps.previous` messages.
  
  **Breaking (React):** compound usage starts from `Steps.Root`; named `Steps*` part exports are
  removed (use `Steps.*`).

## 0.2.0

### Minor Changes

- 7493c27: Add `@pisagor/mcp` and ship Intent skills plus `catalog.gen.json` with UI packages for agent tooling.

### Patch Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.
