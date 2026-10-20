---
"@pisagor/react": minor
"@pisagor/react-form": patch
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `NumberInput` follows the thin parts + shorthand pattern. `NumberInput` is now a shorthand
(`placeholder`, `clearable`, `label`, `showTriggers`, `inputProps`, `classNames`) that renders the
decrement/increment buttons and input. Adds `NumberInput.Root`, `Label`, `ValueText`, and
`NumberInputContract`.

**Breaking (React):**

- Compound usage starts from `NumberInput.Root`; the root no longer auto-renders a control when
  it has no children.
- `DecrementTrigger` / `IncrementTrigger` no longer render a `Button` or icon; use `asChild` with
  your own button and icon. They keep the localized `aria-label`.
- `Input` is the bare Ark input; wrap Pisagor `Input` with `asChild` for the field look.
- `Scrubber` no longer renders a label; compose `<Scrubber asChild><Label asChild><Field.Label>`.
