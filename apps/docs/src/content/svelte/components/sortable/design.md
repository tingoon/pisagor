Sortable lets people reorder a list by dragging items or by moving focus with Alt and arrow keys. It fits when order carries meaning — priorities, steps, playlist tracks, or dashboard widgets.

Prefer Sortable when reordering is the primary task on a modest list; prefer [Data Grid](/svelte/components/data-grid/design) or [Data Table](/svelte/components/data-table/design) when sorting columns matters more than manual item order.

## Best practices

**Show that items can move.** Use a drag handle or cursor affordance so people discover reordering without accidental drags on the whole row.

**Keep items stable while dragging.** Lift the active item visually, show a drop indicator, and animate siblings out of the way without jarring layout jumps.

**Offer a keyboard path.** Alt+arrow (or your documented shortcut) must reorder without a pointer; announce the new position when focus moves.

**Limit scope.** Sortable works best for tens of items, not thousands — paginate or split very long lists.

**Persist order when it matters.** Save sequence after drop when order is user-specific or affects behavior downstream.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a dedicated handle and clear drop feedback so reordering feels intentional.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Make entire clickable rows draggable when the row also navigates or opens detail — separate drag from primary action.</figcaption>
</figure>
</div>

## Touch and accessibility

Increase hit targets on handles for touch. During drag, maintain pointer capture so tracking continues if the finger leaves the item bounds.

## Related patterns

| Need | Prefer |
| --- | --- |
| Manual list reorder | **Sortable** |
| Column sort in a dataset | [Data Table](/svelte/components/data-table/design) |
| Nested hierarchy | [Tree View](/svelte/components/tree-view/design) |
| Bulk reorder in a grid | [Data Grid](/svelte/components/data-grid/design) |
