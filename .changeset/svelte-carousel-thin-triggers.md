---
"@pisagor/svelte": minor
---

Svelte `Carousel` triggers are thin Ark parts. Adds `Carousel.AutoplayIndicator`.

**Breaking (Svelte):** `PrevTrigger`, `NextTrigger`, and `AutoplayTrigger` no longer render a
`Button` or caret / play / pause icons. They keep their localized `aria-label`s; pass a `<Button>`
via the `asChild` snippet and your icons (use `AutoplayIndicator` for play / pause). The shorthand
still renders caret buttons.
