---
"@pisagor/react": minor
"@pisagor/presets": patch
---

React `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and
`autoplayIndicator` / `autoplayTrigger` recipe slots.

**Breaking (React):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
`Button` or caret / play / pause icons (children were previously ignored). They keep their
localized `aria-label`s; pass `<Button>` with `asChild` and your icons (use
`AutoplayIndicator` for play / pause). The shorthand still renders caret buttons.
