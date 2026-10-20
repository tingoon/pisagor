---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `Collapsible` follows the thin parts + shorthand pattern. `Collapsible` is now a shorthand
(`trigger`, `showIndicator`, `classNames`, children as the body). Adds `Collapsible.Root`,
`Collapsible.Body`, and `CollapsibleContract`.

**Breaking (React):**

- Compound usage starts from `Collapsible.Root`.
- `Content` no longer renders an inner `div` with your `className`; wrap children in
  `<Collapsible.Body className="…">` for the same result.
- Named exports `CollapsibleRoot`, `CollapsibleTrigger`, `CollapsibleContent`, and
  `CollapsibleIndicator` are removed; use `Collapsible.*`.
