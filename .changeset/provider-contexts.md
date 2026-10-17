---
"@pisagor/react": minor
"@pisagor/solid": minor
"@pisagor/vue": minor
"@pisagor/svelte": minor
"@pisagor/utils": minor
"@pisagor/tokens": minor
---

Split `Provider` into composable `Provider.Locale`, `Provider.Translations` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, `useProvider` reads the resolved values, and `dir` comes only from Ark's locale context.

**Breaking:** `messages` is renamed to `translations` and `useProviderMessage` to `useTranslation`. In React, `getMessage` is replaced by `useMessage`. Migrate `prop ?? getMessage(key)` to `useMessage(key, prop)`, and use `useMessageResolver()` for keys built inside loops or callbacks.
