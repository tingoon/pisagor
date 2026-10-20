---
"@pisagor/vue": minor
---

Vue `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and re-exports the
Ark part prop types.

**Breaking (Vue):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
`Button` or caret / play / pause icons (slot content was previously ignored). They keep their
localized `aria-label`s; pass `<Button>` with `as-child` and your icons (use `AutoplayIndicator`
with a `#fallback` slot for play / pause). The shorthand still renders caret buttons.
