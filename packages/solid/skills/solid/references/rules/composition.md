# Composition (Pisagor Solid)

| Model | Usage |
| ----- | ----- |
| Closed | `<Button />` |
| Compound | `<Dialog.Root>`, `<Dialog.Trigger>`, … |
| Compound + shorthand | `<Dialog title="…" />` for presets; compose with `.Root` when customizing |

- Triggers: Ark `asChild` render prop — `asChild={(props) => <Button {...props()}>…</Button>}` (not React-style element children).
- Overlays need titles (`Dialog.Title`, …); `sr-only` if visually hidden.
- Select stack in apps: `Select` / `Autocomplete` / `Listbox`.
