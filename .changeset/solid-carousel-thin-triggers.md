---
"@pisagor/solid": minor
---

Solid `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator` and
`autoplayIndicator` / `autoplayTrigger` recipe slots.

**Breaking (Solid):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
`Button` or caret / play / pause icons . They keep their
localized `aria-label`s; pass a `<Button>` via the `asChild` render function and your icons (use
`AutoplayIndicator` for play / pause). The shorthand still renders caret buttons.
