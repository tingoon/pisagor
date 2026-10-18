---
"@pisagor/utils": minor
"@pisagor/react": minor
"@pisagor/solid": minor
"@pisagor/vue": minor
"@pisagor/svelte": minor
---

Merge UI messages into the locale context. `useLocale()` now returns `{ locale, dir, messages, m }`:
the BCP 47 `locale` (default `en-US`), `dir` (derived from the locale unless given), every resolved
UI message (English defaults merged with `Provider` overrides) and `m(key, override?)`, which
returns the override when it is not `null`/`undefined`. These are plain overridable UI messages,
not translations. In Solid, Vue and Svelte the returned values and `m` stay reactive.

**Breaking:** the separate translations context is gone. `Provider` takes flat `locale`, `dir` and
`messages` props (was `locale={{ locale }}` and `translations`), `Provider.Locale` takes the same
props and `Provider.Translations` is removed. `useLocale().m` replaces `useMessage`,
`useTranslation` and `useMessageResolver`; `useTranslations` is removed. In `@pisagor/utils`,
`TranslationsConfig`, `ProviderMessages`, `defaultTranslations` and `resolveMessage` are removed in
favour of `Messages`, `LocaleConfig` (`locale`, `dir`, `messages`), `LocaleContextValue`,
`resolveLocale` and `getLocaleDir`; `useProviderValue()` returns `{ locale, motion }`.
