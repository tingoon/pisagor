Data Table presents structured tabular data with headers and rows for scanning, selection, and light interaction. It sits between a simple [Table](/solid/components/table/design) and a full [Data Grid](/solid/components/data-grid/design).

Prefer Data Table for product tables with headers, sorting, and row actions at moderate scale. Prefer Data Grid when pinning, virtualization, or heavy in-cell editing is central to the workflow.

## Best practices

**Design headers for scanning.** Use short, specific column titles and align numbers, text, and actions consistently across rows.

**Expose sort and filter when promised.** If columns are sortable, show direction indicators; reset or explain when filters hide rows.

**Keep row actions focused.** Prefer one primary row action and an overflow menu for the rest so rows stay readable.

**Support empty and loading states.** Use [Empty State](/solid/components/empty-state/design) when no rows match filters, and skeleton rows during fetch.

**Choose pagination or infinite scroll deliberately.** Pagination aids comparison and deep linking; infinite scroll suits feeds — avoid mixing both without clear cues.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use Data Table for admin lists with headers, sort, and row-level actions.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Pick Data Table when you need spreadsheet-grade editing across thousands of virtualized rows.</figcaption>
</figure>
</div>

## Selection

When rows are selectable, show a selection column, update counts in toolbar or [Action Bar](/solid/components/action-bar/design), and make bulk destructive actions confirm before apply.

## Related patterns

| Need | Prefer |
| --- | --- |
| Structured interactive table | **Data Table** |
| Advanced grid editing and virtualization | [Data Grid](/solid/components/data-grid/design) |
| Compact static markup table | [Table](/solid/components/table/design) |
| No rows yet | [Empty State](/solid/components/empty-state/design) |
