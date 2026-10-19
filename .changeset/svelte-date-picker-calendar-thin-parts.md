---
"@pisagor/svelte": minor
"@pisagor/svelte-form": patch
---

Svelte `DatePicker` follows the thin parts + shorthand pattern and `Calendar.PrevTrigger` / `Calendar.NextTrigger` are thin (mirrors React and Solid). `DatePicker` is a shorthand (`placeholder`, `clearable`, `size`, `inputProps`, `classNames`; children replace the default calendar) that renders the input, calendar trigger, portal, positioner and default calendar; adds `DatePicker.Positioner`. **Breaking:** compound usage starts from `DatePicker.Root` and you render `Portal` and `Positioner` yourself; `Content` no longer renders a default calendar; `Input` is the bare Ark input; `Trigger` is no longer wrapped in `Control`; `ClearTrigger` no longer hides itself or renders an icon; `TimeInput` drops `clearable`; the deprecated `DatePicker.Timer` alias is removed. Calendar nav triggers no longer render a button or icon: pass your own with `asChild` (the localized `aria-label` stays). `@pisagor/svelte-form` `DateField` uses the new parts.
