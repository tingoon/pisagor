---
"@pisagor/solid": minor
"@pisagor/solid-form": patch
---

Solid `InputOTP` follows the thin parts + shorthand pattern (mirrors React). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`; named `InputOTPRoot`, `InputOTPSlot` and `InputOTPSeparator` exports are removed.
