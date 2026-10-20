---
"@pisagor/vue": minor
---

Vue `Listbox` parts are thin (mirrors React). `Listbox.Root`, `Item`, `ItemText`, `ItemGroup`,
`ItemGroupLabel`, `ValueText`, `ItemIndicator`, and `Empty` are Ark parts styled through the recipe
context; the shorthand renders `items` / `collection` with `emptyText`. Re-exports the Ark part prop
types and `createListCollection`.

**Breaking (Vue):**

- `Listbox.ItemIndicator` no longer renders a check icon; put your own icon inside.
- `Listbox.ItemGroup` drops the `heading` prop; render `<Listbox.ItemGroupLabel>` inside it.
- The shorthand no longer renders its default slot; use `Listbox.Root` for custom content.
