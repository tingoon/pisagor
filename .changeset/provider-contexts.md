---
"@pisagor/react": minor
"@pisagor/solid": minor
"@pisagor/vue": minor
"@pisagor/svelte": minor
"@pisagor/utils": minor
"@pisagor/tokens": minor
---

Split `Provider` into composable `Provider.Locale` and `Provider.Motion` parts. Nested providers merge over their parent, the root `Provider` mounts the toaster once, `motion={{ disabled: true }}` collapses animations through `data-motion="disabled"`, and `useProvider` reads the resolved values.

**Breaking:** `useProviderMessage` and React's `getMessage` are replaced by `useLocale().m`. Migrate `prop ?? getMessage(key)` to `const { m } = useLocale();` and `m(key, prop)`.
