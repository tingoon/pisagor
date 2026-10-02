---
title: Calendar
description: "Lets users browse and pick a day, month, or range on a familiar calendar grid."
api: compound
taxonomy: pattern
aliases:
  - date-grid
---

## When to use

- Browse and pick dates on a calendar grid when users think in days and months.
- Prefer Calendar inside Date Picker when a field or popover wrapper is needed.
- Use booked, min/max, and presets when availability or common ranges matter.

## Import

```ts
import { Calendar } from "@pisagor/svelte";
```

Style with `@pisagor/recipes/calendar` — no app-level `tv()`.

## Examples

### Default

Browse and pick a single date on the calendar grid.

:::example Default

### Invalid

Show that the selected date is not allowed.

:::example Invalid

### Disabled

Show that the calendar cannot be used. Prefer explaining why nearby.

:::example Disabled

### Booked Dates

Mark unavailable days when bookings or blackout dates matter.

:::example BookedDates

### Custom Cell Size

Resize day cells when the calendar must match a denser or larger layout.

:::example CustomCellSize

### Min Max

Limit selection to a valid window of dates.

:::example MinMax

### Range

Pick a start and end date for spans such as trips or reports.

:::example Range

### Fixed Weeks

Keep six rows every month so the calendar height stays stable.

:::example FixedWeeks

### Month Year Selector

Jump by month or year when paging day-by-day would be slow.

:::example MonthYearSelector

### Multiple Months

Show more than one month when comparing ranges across months.

:::example MultipleMonths

### Presets

Offer common ranges so users can pick without hunting on the grid.

:::example Presets

### Select Today

Jump to today when returning to the current date is a frequent action.

:::example SelectToday

### Controlled

Drive the selected date from the parent when other UI depends on it.

:::example Controlled

