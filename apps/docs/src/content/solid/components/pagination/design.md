Pagination moves through long lists and result sets page by page with previous, next, and direct page controls. It sets expectations about volume and gives people a stable sense of progress through indexed chunks.

Prefer Pagination when items are naturally paged on the server; prefer infinite scroll only when continuity matters more than jumping to a known page. Prefer [Data Table](/solid/components/data-table/design) built-in tooling when pagination is tightly coupled to grid chrome.

## Best practices

**Show where you are in the set.** Current page, total pages, or “Page 3 of 24” beats anonymous next arrows alone.

**Keep previous and next reachable.** Disable at boundaries instead of hiding controls without explanation.

**Avoid enormous page strips.** Collapse middle pages with an ellipsis; offer jump-to-page only when power users need it.

**Preserve sort and filters in links.** Changing page should not reset the query that produced the list.

**Size pages for the task.** Tables may use 25–50 rows; image galleries may use fewer to keep load light.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show Previous, numbered pages with ellipsis, and Next for a 200-row admin table.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Render fifty numbered buttons when most people only need next, previous, and first/last.</figcaption>
</figure>
</div>

## Accessibility

Announce page changes to assistive tech when content swaps without a full navigation. Focus management should land on the list heading or first row after a page change when that helps orientation.

## Related patterns

| Need | Prefer |
| --- | --- |
| Indexed page controls | **Pagination** |
| Tabular data + filters | [Data Table](/solid/components/data-table/design) |
| Compact page metadata | [Stat](/solid/components/stat/design) |
| Long option lists | [Select](/solid/components/select/design) |
