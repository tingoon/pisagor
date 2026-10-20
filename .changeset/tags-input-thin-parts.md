---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `TagsInput` follows the thin parts + shorthand pattern. `TagsInput` is now a shorthand
(`placeholder`, `clearable`, `size`, `variant`, `classNames`) that renders the input group, tags,
input, and clear-all button. Parts map 1:1 to Ark. Adds `TagsInput.Root`, `Label`, and
`TagsInputContract`.

**Breaking (React):**

- Compound usage starts from `TagsInput.Root` / `TagsInput.RootProvider`; neither auto-renders
  the control, tags, or input any more (both still render the hidden input).
- `Control` is the bare Ark control; use `asChild` with `InputGroup` for the field shell.
- `Item` no longer renders its preview, text, delete trigger, or edit input; compose
  `ItemPreview` > `ItemText` + `ItemDeleteTrigger`, then `ItemInput`.
- `Input`, `ItemInput`, `ItemDeleteTrigger`, and `ClearTrigger` are bare Ark parts (no
  `InputGroup` wrapper, no default icon). The triggers keep localized `aria-label`s.
- Named `TagsInputRoot`, `TagsInputControl`, `TagsInputItem*`, `TagsInputInput`,
  `TagsInputClearTrigger`, and `TagsInputRootProvider` exports are removed; use `TagsInput.*`.
