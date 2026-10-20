---
"@pisagor/svelte": minor
---

Svelte `PasswordInput` parts are thin and 1:1 with Ark (mirrors React). `Root`, `Label` (new), `Control`, `Input`, `VisibilityTrigger` and `Indicator` (new) only style; the shorthand gains `classNames`, `indicatorProps` and `visibilityTriggerProps`. **Breaking:** `PasswordInput.Control` no longer renders an `InputGroup`, `PasswordInput.Input` no longer renders `InputGroup.Input`, and `PasswordInput.VisibilityTrigger` no longer renders its addon, button or eye icons; compose them with `asChild` snippets (see the compound example).
