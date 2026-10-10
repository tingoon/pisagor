Autocomplete helps people pick one option from a long list by typing to filter suggestions as they go. It reduces scanning when the full set is too large to read at a glance.

Prefer Autocomplete when filtering by text is faster than scrolling; prefer [Select](/svelte/components/select/design) for short, stable lists. Prefer [Combobox](/svelte/components/combobox/design) when you need lower-level control over the selection engine.

## Best practices

**Show suggestions after meaningful input.** Avoid flooding the list on the first keystroke unless the dataset is small and local.

**Highlight why a row matched.** Bold or emphasize the matching substring so people trust the filter.

**Support keyboard completion.** Arrow keys, Enter to select, and Escape to close keep power users efficient.

**Preserve free text when allowed.** When custom values are valid, say so in the label or helper text; when they are not, clarify that only listed options apply.

**Handle empty and loading states.** “No results” with guidance to refine the query beats a blank panel; show progress when options load remotely.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Limit the dropdown to relevant matches and keep the field label tied to what is being chosen.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use autocomplete for a handful of fixed choices that fit comfortably in a select menu.</figcaption>
</figure>
</div>

## Selection

Selecting an option should fill the field with the chosen label and close the list. Clear affordances to reset or change selection help when people pick the wrong row.

## Related patterns

| Need | Prefer |
| --- | --- |
| Type-to-filter long lists | **Autocomplete** |
| Short fixed option set | [Select](/svelte/components/select/design) |
| Composable listbox behavior | [Combobox](/svelte/components/combobox/design) |
| Multiple tags from search | [Tags Input](/svelte/components/tags-input/design) |
