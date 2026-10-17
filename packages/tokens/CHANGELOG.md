# @pisagor/tokens

## 0.4.0

### Minor Changes

- 2fc35e7: Split `Provider` into composable `Provider.Locale`, `Provider.Translations` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, `useProvider` reads the resolved values, and `dir` comes only from Ark's locale context.
  
  **Breaking:** `messages` is renamed to `translations` and `useProviderMessage` to `useTranslation`. In React, `getMessage` is replaced by `useMessage`. Migrate `prop ?? getMessage(key)` to `useMessage(key, prop)`, and use `useMessageResolver()` for keys built inside loops or callbacks.

## 0.3.0

### Minor Changes

- 7493c27: Add `@pisagor/mcp` and ship Intent skills plus `catalog.gen.json` with UI packages for agent tooling.

### Patch Changes

- 9e60302: Docs and component packaging: shared examples driven by Storybook order, TanStack Highlight for code blocks, generated props tables across React/Vue/Astro docs, recipes as visual SSOT with props SSOT in `@pisagor/props`, and related framework package cleanups.

## 0.2.0

### Minor Changes

- 2df1c31: Mute page chrome and raise form-control fills from Surface / Frame context via `useFormControlSurface`.
