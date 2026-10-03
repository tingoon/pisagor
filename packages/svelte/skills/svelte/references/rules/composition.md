# Composition (Pisagor Svelte)

| Model | Usage |
| ----- | ----- |
| Closed | `<Button />` |
| Compound | `<Dialog.Root>`, `<Dialog.Trigger>`, … |
| Compound + shorthand | `<Dialog title="…" />` for presets; compose with `.Root` when customizing |

- Triggers: prefer documented trigger snippets / slots — match MCP `get_example` / package exports (e.g. `{#snippet trigger()}`).
- Overlays need titles (`Dialog.Title`, …); `sr-only` if visually hidden.
- Select stack in apps: `Select` / `Autocomplete` / `Listbox`.
