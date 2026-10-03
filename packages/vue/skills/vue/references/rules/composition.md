# Composition (Pisagor Vue)

| Model | Usage |
| ----- | ----- |
| Closed | `<Button />` |
| Compound | `<Dialog.Root>`, `<Dialog.Trigger>`, … |
| Compound + shorthand | `<Dialog title="…" />` for presets; compose with `.Root` when customizing |

- Triggers: Ark as-child / documented trigger slots — match MCP `get_example` / package exports.
- Overlays need titles (`Dialog.Title`, …); `sr-only` if visually hidden.
- Select stack in apps: `Select` / `Autocomplete` / `Listbox`.

