---
title: Timer
description: "Counts up or down through intervals so users can track elapsed or remaining time."
api: compound
taxonomy: standard
---

## When to use

- Count elapsed or remaining time for sessions, countdowns, and intervals.
- Prefer Timer when time itself is the focus; prefer Progress when completion percent matters more.
- Expose start, pause, and reset clearly so users stay in control.

## Import

```tsx
import { Timer } from "@pisagor/solid";
```

Style with `@pisagor/recipes/timer` — no app-level `tv()`.

## Examples

### Default

Count elapsed time with start and reset controls.

:::example Default

### Orientation Horizontal

Lay out the timer horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the timer vertically when items should read in a column.

:::example OrientationVertical

### Countdown Date

Count down to a specific date or time.

:::example CountdownDate

### Countdown

Count down toward zero when remaining time is the focus.

:::example Countdown

### Custom Separator

Override time separators when locale or brand needs different punctuation.

:::example CustomSeparator

### Interval

Fire on an interval when recurring ticks drive the UI.

:::example Interval

### Pomodoro

Run work-and-break cycles when the timer follows a pomodoro rhythm.

:::example Pomodoro

### Controlled

Manage state from the parent when other UI must stay in sync with this timer.

:::example Controlled
