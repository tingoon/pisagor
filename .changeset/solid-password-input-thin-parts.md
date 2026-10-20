---
"@pisagor/solid": minor
---

Solid `PasswordInput` parts are thin and 1:1 with Ark (mirrors React). `Root`, `Label`, `Control`, `Input`, `VisibilityTrigger` and `Indicator` only style; the shorthand gains `classNames`. **Breaking:** `PasswordInput.Control` no longer renders an `InputGroup`, `PasswordInput.Input` no longer renders `InputGroup.Input`, and `PasswordInput.VisibilityTrigger` no longer renders its addon, button or eye icons; compose them with `asChild` (see the compound example).
