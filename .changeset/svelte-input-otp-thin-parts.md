---
"@pisagor/svelte": minor
"@pisagor/svelte-form": patch
---

Svelte `InputOTP` follows the thin parts + shorthand pattern (mirrors React and Solid). `InputOTP` is now a shorthand (`length`, `groupSize`, `classNames`) that renders the control, slot inputs and separators; adds `InputOTP.Root`, `Control` and `Label`. **Breaking:** compound usage starts from `InputOTP.Root`, which no longer renders `Control`; `InputOTP.Slot` is renamed `InputOTP.Input`. `@pisagor/svelte-form` `OTPField` uses the new parts.
