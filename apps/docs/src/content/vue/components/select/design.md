Select lets people choose one option from a dropdown when showing every choice inline would consume too much space or overwhelm the layout. The closed state shows the current value; the list opens on demand.

Prefer Select for moderate lists with stable labels. Prefer [Autocomplete](/vue/components/autocomplete/design) or [Combobox](/vue/components/combobox/design) when typing to filter long datasets is faster than scrolling. Prefer [Listbox](/vue/components/listbox/design) when you need a composable list surface without a select-specific trigger. Prefer [Radio Group](/vue/components/radio-group/design) when all options should stay visible for comparison.

## Best practices

**Label the control clearly.** State what is being chosen; the trigger should show the selected label, not placeholder text, once a value exists.

**Sort for findability.** Alphabetical or frequency-based order beats arbitrary IDs; group related options with separators or headings when the list is long.

**Indicate disabled and unavailable items.** Gray out or skip options people cannot pick, with helper text when the reason matters.

**Support keyboard navigation.** Typeahead, arrows, Enter to select, and Escape to close should match platform menus.

**Avoid duplicate triggers.** One select per field; do not nest another select’s options inside without a clear hierarchy.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use select for country, role, or status fields with tens of options and a clear current value on the trigger.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide two or three fixed choices in a select when radios or segments would be faster to scan.</figcaption>
</figure>
</div>

## Empty and async

Show loading in the list when options fetch remotely. Empty states should explain how to get options or why none exist.

## Related patterns

| Need | Prefer |
| --- | --- |
| Single choice from dropdown | **Select** |
| Type-to-filter long list | [Autocomplete](/vue/components/autocomplete/design) |
| Low-level list selection | [Listbox](/vue/components/listbox/design) |
| Few visible mutually exclusive options | [Radio Group](/vue/components/radio-group/design) |
