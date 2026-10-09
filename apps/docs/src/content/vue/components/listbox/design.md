Listbox presents a scrollable set of options with clear selected and focused states. It shines when people benefit from seeing several choices at once instead of opening a closed trigger.

Prefer Listbox when the option set stays visible on the page; prefer [Select](/vue/components/select/design) when space is tight and a closed control suffices. Prefer [Autocomplete](/vue/components/autocomplete/design) when typing to filter a long list is faster than scrolling. Prefer [Combobox](/vue/components/combobox/design) when you need lower-level composition of the selection engine.

## Best practices

**Support single and multiple selection intentionally.** Checkboxes communicate multi-select; radio semantics or aria patterns communicate single-select—do not mix metaphors.

**Keep option labels concise.** Put detail in descriptions; truncate with care and expose full text via tooltip when needed.

**Group long lists.** Use sections or sticky group headers so related options stay findable.

**Typeahead when lists are long.** Let people jump by typing the start of a label without leaving the list surface.

**Show empty and loading states.** A listbox with zero matches should explain why and how to recover.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show eight roles in a visible listbox when users compare options before picking one.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Render a 400-item listbox when search-first Autocomplete would be faster.</figcaption>
</figure>
</div>

## Keyboard

Arrow keys move focus; Space toggles selection in multi-select; Enter commits in single-select patterns. Preserve visible focus rings that match [Item](/vue/components/item/design) rows elsewhere.

## Related patterns

| Need | Prefer |
| --- | --- |
| Visible scrollable options | **Listbox** |
| Compact closed picker | [Select](/vue/components/select/design) |
| Filter-as-you-type | [Autocomplete](/vue/components/autocomplete/design) |
| Row anatomy | [Item](/vue/components/item/design) |
