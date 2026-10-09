Calendar lets people browse and pick a day, month, or range on a familiar grid. It matches mental models when tasks are scheduled by date rather than typed strings.

Prefer Calendar inside [Date Picker](/vue/components/date-picker/design) when the control lives in a field or popover; use a standalone calendar when the grid is the main focus of the screen.

## Best practices

**Show context month clearly.** Month and year headings, with previous and next controls, keep people oriented when jumping far forward or back.

**Mark unavailable days.** Disabled, booked, or out-of-range dates should look inactive and ignore selection — do not rely on error messages after the fact.

**Support ranges with visible endpoints.** When selecting start and end, highlight the span between so the chosen period is obvious before confirm.

**Offer shortcuts when patterns repeat.** Presets such as Today, This week, or Last 30 days speed common business ranges.

**Localize start of week and labels.** Weekday order and format follow locale so the grid feels native.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Disable dates that cannot be booked and show the selected range as one connected highlight.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force people to guess valid dates by showing errors only after they pick a blocked day.</figcaption>
</figure>
</div>

## Density

Multi-month views help desktop booking flows; single-month views suit mobile. Keep touch targets large enough for finger selection on small screens.

## Related patterns

| Need | Prefer |
| --- | --- |
| Grid date browsing | **Calendar** |
| Field with popover calendar | [Date Picker](/vue/components/date-picker/design) |
| Typed date entry | [Input](/vue/components/input/design) |
| Time-of-day selection | [Timer](/vue/components/timer/design) |
