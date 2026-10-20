---
"@pisagor/react": minor
"@pisagor/react-form": patch
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `InputOTP` follows the thin parts + shorthand pattern. `InputOTP` is now a shorthand
(`length`, `groupSize`, `classNames`). Adds `InputOTP.Root`, `Control`, `Label`, and
`InputOtpContract`.

**Breaking (React):**

- Compound usage starts from `InputOTP.Root`, which no longer wraps children in `Control`;
  render `<InputOTP.Control>` yourself.
- `InputOTP.Slot` is renamed to `InputOTP.Input` (Ark name).
- Named `InputOTPRoot`, `InputOTPSlot`, and `InputOTPSeparator` exports are removed.
