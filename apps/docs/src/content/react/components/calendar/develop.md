## Import

```tsx
import { Calendar } from "@pisagor/react";
```

## Anatomy

```tsx
<Calendar>
  <Calendar.ViewControl>
    <Calendar.PrevTrigger />
    <Calendar.ViewDate />
    <Calendar.NextTrigger />
  </Calendar.ViewControl>
  <Calendar.Table>
    <Calendar.WeekDays />
    <Calendar.TableDays />
  </Calendar.Table>
</Calendar>
```

## Examples

### Default

Browse and pick a single date on the calendar grid.

:::example Default

### Range

Pick a start and end date for spans such as trips or reports.

:::example Range

### Multiple Months

Show more than one month when comparing ranges across months.

:::example MultipleMonths

### Month Year Selector

Jump by month or year when paging day-by-day would be slow.

:::example MonthYearSelector

### Presets

Offer common ranges so users can pick without hunting on the grid.

:::example Presets

### Controlled

Drive the selected date from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the calendar cannot be used.

:::example Disabled

### Invalid

Show that the selected date is not allowed.

:::example Invalid

### Min Max

Limit selection to a valid window of dates.

:::example MinMax

### Booked Dates

Mark unavailable days when bookings or blackout dates matter.

:::example BookedDates

### Fixed Weeks

Keep six rows every month so the calendar height stays stable.

:::example FixedWeeks

### Select Today

Jump to today when returning to the current date is a frequent action.

:::example SelectToday

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Resize day cells when the calendar must match a denser or larger layout.

:::example CustomCellSize

### Custom recipe

Extend `calendarRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
