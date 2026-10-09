Data Grid displays and edits large tabular datasets with sorting, filtering, pinning, and related grid behaviors. It is built for dense, interactive work where rows and columns are first-class objects.

Prefer Data Grid when people sort, filter, edit, or virtualize thousands of rows. Prefer [Data Table](/solid/components/data-table/design) for structured read-mostly tables, and [Table](/solid/components/table/design) for compact static layouts.

## Best practices

**Invest in column clarity.** Use stable headers, alignment that matches data type, and truncation with tooltips only when full text is available elsewhere.

**Make sorting and filtering obvious.** Show active sort direction and filter chips so people know why rows appear in the current order.

**Virtualize long lists.** Keep scrolling smooth by rendering visible rows only; preserve row height consistency to avoid scroll jank.

**Support selection and bulk work thoughtfully.** When rows are selectable, pair selection with an [Action Bar](/solid/components/action-bar/design) instead of crowding every row with buttons.

**Edit with guardrails.** Inline edits should validate before commit, offer undo where possible, and distinguish read-only columns from editable ones.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use Data Grid for large editable datasets with sort, filter, and column pinning.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Adopt Data Grid for a five-row settings table that only needs to be read.</figcaption>
</figure>
</div>

## Density and performance

Offer comfortable and compact density when teams live in the grid daily. Defer expensive cell renderers until rows are near the viewport, and show skeleton rows while data loads.

## Related patterns

| Need | Prefer |
| --- | --- |
| Large interactive editable grid | **Data Grid** |
| Structured table without advanced grid chrome | [Data Table](/solid/components/data-table/design) |
| Simple read-only table | [Table](/solid/components/table/design) |
| Bulk actions on selected rows | [Action Bar](/solid/components/action-bar/design) |
