# @pisagor/svelte

## 0.3.0

### Minor Changes

- 2fc35e7: Split `Provider` into composable `Provider.Locale`, `Provider.Translations` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, `useProvider` reads the resolved values, and `dir` comes only from Ark's locale context.
  
  **Breaking:** `messages` is renamed to `translations` and `useProviderMessage` to `useTranslation`. In React, `getMessage` is replaced by `useMessage`. Migrate `prop ?? getMessage(key)` to `useMessage(key, prop)`, and use `useMessageResolver()` for keys built inside loops or callbacks.

### Patch Changes

- Updated dependencies [2fc35e7]
  - @pisagor/utils@0.3.0
  - @pisagor/tokens@0.4.0

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
