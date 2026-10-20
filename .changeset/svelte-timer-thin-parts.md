---
"@pisagor/svelte": minor
---

Svelte `Timer` follows the thin parts + shorthand pattern (mirrors React and Solid). `Timer` is now a shorthand (`units` with localized labels, `showControls`, `classNames`); adds `Timer.Root`. `Timer.Play` now switches between pause, resume and start. **Breaking:** compound usage starts from `Timer.Root`, which no longer renders units or controls; `isControlsVisible` is replaced by the shorthand `showControls`.
