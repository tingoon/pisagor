Empty State shows a centered placeholder when a view has no data and points to the next useful action. It turns an absence of content into guidance instead of a dead end.

Prefer Empty State when a list, table, or dashboard legitimately has nothing to show yet. Prefer inline zero-row messaging in [Data Table](/vue/components/data-table/design) only when the surrounding chrome already explains context.

## Best practices

**Explain why it is empty.** Distinguish “nothing created yet,” “no results for this filter,” and “you lack permission” with different copy and actions.

**Offer one primary next step.** Create, import, clear filters, or adjust search — pick the action that most often resolves the empty view.

**Keep visuals restrained.** A simple illustration or icon is enough; the headline and action carry the message.

**Do not blame the user.** Use neutral, helpful tone — “No projects yet” beats “You haven’t created anything.”

**Match the container.** Size padding and typography to the parent panel so empty states feel native in cards, full pages, and sidebars.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show “No messages” with a Start conversation button when the inbox is empty.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show an empty state while data is still loading — use skeletons first.</figcaption>
</figure>
</div>

## Filters and search

When filters cause emptiness, say so explicitly and offer Clear filters or broaden search. Preserve the user’s query so they can adjust it rather than starting over.

## Related patterns

| Need | Prefer |
| --- | --- |
| Zero data with guided action | **Empty State** |
| Loading placeholder | [Skeleton](/vue/components/skeleton/design) |
| Table with no rows | Empty State inside [Data Table](/vue/components/data-table/design) |
| Error fetching data | [Alert](/vue/components/alert/design) |
