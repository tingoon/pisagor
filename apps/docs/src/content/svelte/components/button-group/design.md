Button group clusters related actions so people compare choices and pick one without hunting across the layout. Shared edges signal that the options belong together.

Prefer button group when actions share a purpose; prefer [Toolbar](/svelte/components/toolbar/design) when a heading and actions share one horizontal row. Prefer [Segment Group](/svelte/components/segment-group/design) when the cluster behaves like a single selected value.

## Best practices

**Keep the set coherent.** Group formatting, alignment, or view mode toggles — not unrelated Save and Delete.

**One strong emphasis.** At most one option should look primary; others stay outline or ghost so the recommended choice is obvious.

**Preserve equal width when comparing.** Segmented equal columns help when labels are short and parallel.

**Expose selection state.** For toggle-style groups, show which option is active with aria-pressed or equivalent semantics.

**Wrap on small screens.** Allow the group to stack or scroll horizontally before clipping labels.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Group Left, Center, and Right alignment controls in one connected cluster.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Merge destructive and constructive actions in one group without visual separation.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Related actions side by side | **Button Group** |
| Section title plus actions | [Toolbar](/svelte/components/toolbar/design) |
| Single choice among few options | [Segment Group](/svelte/components/segment-group/design) |
| Bulk actions on selection | [Action Bar](/svelte/components/action-bar/design) |
