---
"@pisagor/react": minor
"@pisagor/contracts": minor
"@pisagor/presets": patch
---

React `Timer` follows the thin parts + shorthand pattern. `Timer` is now a shorthand (`units`,
`showControls`, `classNames`) that renders units with localized labels and play/pause + reset
buttons. `Separator` and `ActionTrigger` are thin parts. Adds `Timer.Root` and `TimerContract`.

**Breaking (React):**

- Compound usage starts from `Timer.Root`, which no longer takes `units` / `isControlsVisible`
  (use the shorthand's `units` / `showControls`).
- Named `Timer*` part exports are removed; use `Timer.*`.
