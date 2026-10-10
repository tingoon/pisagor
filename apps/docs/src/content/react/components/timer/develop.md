## Import

```tsx
import { Timer } from "@pisagor/react";
```

## Anatomy

```tsx
<Timer>
  <Timer.Area>
    <Timer.ItemGroup>
      <Timer.Item />
      <Timer.ItemLabel />
    </Timer.ItemGroup>
    <Timer.Separator />
  </Timer.Area>
</Timer>
```

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

### Custom Separator

Override time separators when locale or brand needs different punctuation.

:::example CustomSeparator

### Countdown

Count down toward zero when remaining time is the focus.

:::example Countdown

### Countdown Date

Count down to a specific date or time.

:::example CountdownDate

### Pomodoro

Run work-and-break cycles when the timer follows a pomodoro rhythm.

:::example Pomodoro

### Controlled

Manage state from the parent when other UI must stay in sync with this timer.

:::example Controlled

### Interval

Fire on an interval when recurring ticks drive the UI.

:::example Interval

## Customization

### Custom recipe

Extend `timerRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
