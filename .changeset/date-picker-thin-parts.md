---
"@pisagor/react": minor
"@pisagor/react-form": patch
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `DatePicker` follows the thin parts + shorthand pattern. `DatePicker` is now a shorthand
(`placeholder`, `clearable`, `size`, `inputProps`, `classNames`, children replace the default
calendar) that renders the input, calendar trigger, `Portal`, `Positioner`, and default calendar.
Parts map 1:1 to Ark. Adds `DatePicker.Positioner` and `DatePickerContract`.

**Breaking (React):**

- Compound usage starts from `DatePicker.Root`, and you render `Portal` and `Positioner`
  yourself (`Content` no longer portals or positions).
- `Content` no longer renders a default calendar; compose `Calendar.*` parts or use the shorthand.
- `Input` is the bare Ark input (no input group, calendar button, or clear button). Use the
  shorthand or compose `InputGroup` with `Input asChild`, `Trigger`, and `ClearTrigger`.
- `Trigger` is no longer wrapped in `Control` automatically.
- `ClearTrigger` no longer hides itself or renders an icon.
- The deprecated `DatePicker.Timer` alias is removed; use `DatePicker.TimeInput`.
