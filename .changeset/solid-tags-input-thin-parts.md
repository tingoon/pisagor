---
"@pisagor/solid": minor
---

Solid `TagsInput` follows the thin parts + shorthand pattern (mirrors React). `TagsInput` is now a shorthand (`placeholder`, `clearable`, `size`, `variant`, `classNames`) that renders the tag items, input and clear button; adds `TagsInput.Root` and `TagsInput.Label`. **Breaking:** compound usage starts from `TagsInput.Root` / `TagsInput.RootProvider`, which no longer render a control or items; `Control` is the bare Ark control (use `asChild` with `InputGroup`); `Item` no longer renders its preview, text, delete trigger or input; `ItemDeleteTrigger`, `ClearTrigger`, `Input` and `ItemInput` no longer render buttons, icons or input groups; named `TagsInputRoot`, `TagsInputControl`, … exports are removed.
