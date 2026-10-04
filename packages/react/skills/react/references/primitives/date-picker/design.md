Date Picker lets people choose a date or range from a calendar inside a field or popover. It reduces typing errors and makes valid ranges visible at a glance.

Prefer Date Picker for known calendar dates. Prefer plain [Input](/react/components/input/design) only when your audience expects strict typed entry and locale formats are fixed.

## Best practices

**Reflect locale and format.** Show dates in the user’s expected order and separator; keep the field value and calendar selection in sync.

**Constrain selectable dates.** Disable past dates for bookings, cap ranges for reports, and explain constraints in helper text when rules are non-obvious.

**Support keyboard entry.** Allow typing a date in the field with validation, not only pointer selection in the grid.

**Clarify single vs range.** Label whether one day or a span is required, and show both ends clearly for ranges including inclusive/exclusive rules in copy.

**Anchor the calendar near the field.** Open the popover aligned to the input, keep month navigation obvious, and close on selection when a single date completes the task.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Disable invalid days in the calendar and mirror the chosen date in the field.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force free-text dates without validation when a calendar would prevent mistakes.</figcaption>
</figure>
</div>

## Mobile

On small screens, ensure touch targets for days meet minimum size and that the popover does not cover the only way to dismiss or confirm.

## Related patterns

| Need | Prefer |
| --- | --- |
| Pick a date or range with calendar | **Date Picker** |
| Calendar surface alone | [Calendar](/react/components/calendar/design) |
| Field label and errors | [Field](/react/components/field/design) |
| Date inside a filter popover | Date Picker in [Popover](/react/components/popover/design) |
