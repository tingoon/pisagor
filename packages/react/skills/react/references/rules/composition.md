# Composition (Pisagor React)

| Model | Usage |
| ----- | ----- |
| Closed | `<Button />` |
| Compound | `<Dialog.Root>`, `<Dialog.Trigger>`, … |
| Compound + shorthand | `<Dialog title="…" />` for presets; compose with `.Root` when customizing |

- Triggers: `asChild` with a single child (`Button`, link).
- Overlays need titles (`Dialog.Title`, …); `sr-only` if visually hidden.
- Select stack in apps: `Select` / `Autocomplete` / `Listbox`.

