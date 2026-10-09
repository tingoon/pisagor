Combobox combines a text field with a filterable list selection engine for advanced composition. It is a lower-level building block; most product UIs should use [Autocomplete](/solid/components/autocomplete/design) instead.

Prefer Autocomplete for searchable single-select fields in forms and filters. Use Combobox only when you need custom list rendering, selection logic, or integration that Autocomplete does not expose.

## Best practices

**Default to Autocomplete first.** Reach for Combobox when engineering requirements outgrow the Autocomplete API, not when a standard searchable field will do.

**Keep typing and selection aligned.** Filter options as the user types, highlight the active option, and write the chosen value back to the field in a consistent format.

**Support keyboard parity.** Arrow keys, Enter to select, Escape to close, and typeahead should match platform expectations for combo boxes.

**Handle empty and loading states.** Say when no options match, when results are loading, and when the list is genuinely empty — never show a silent blank panel.

**Limit list height.** Scroll long result sets inside a bounded popover and keep the input visible so context is never lost.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Ship Autocomplete for standard “search and pick one” flows in product UI.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Expose Combobox to end users when Autocomplete already matches the interaction.</figcaption>
</figure>
</div>

## Composition

Use Combobox when you must own the listbox, input, and filtering pipeline — for example, multi-source results or highly custom item templates. Document the chosen value format for downstream forms and APIs.

## Related patterns

| Need | Prefer |
| --- | --- |
| Searchable single select in product UI | [Autocomplete](/solid/components/autocomplete/design) |
| Low-level selection engine | **Combobox** |
| Fixed list without typing | [Select](/solid/components/select/design) |
| Listbox-only presentation | [Listbox](/solid/components/listbox/design) |
