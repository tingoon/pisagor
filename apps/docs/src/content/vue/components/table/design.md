Table presents rows and columns of data in a structured grid for scanning, comparing, and reading aligned values. It fits static or lightly interactive datasets where built-in sorting, filtering, and virtualization are not required.

Prefer Table for straightforward markup-first grids; prefer [Data Table](/vue/components/data-table/design) when you need sortable columns, selection, and toolbar patterns at scale. Prefer [Data Grid](/vue/components/data-grid/design) for spreadsheet-like editing, column resize, and dense interaction.

## Best practices

**Design columns for scanning.** Left-align text, right-align numbers, and keep headers short and sortable only when you implement sort behavior.

**Use zebra or row hover sparingly.** Subtle row separation helps long tables; avoid heavy borders that fight content density.

**Keep header rows visible.** Sticky headers help when bodies scroll vertically within a constrained region.

**Align actions consistently.** Put row actions in a dedicated column with predictable iconography and accessible names.

**Empty and loading states belong in the table body.** Show a single clear message or skeleton rows instead of collapsing the table chrome.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use semantic table structure with headers scoped to columns for screen readers.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Build a thousand-row interactive product grid with Table alone — graduate to [Data Table](/vue/components/data-table/design) or [Data Grid](/vue/components/data-grid/design).</figcaption>
</figure>
</div>

## Selection and bulk actions

When rows become selectable, pair the table with [Action Bar](/vue/components/action-bar/design) for bulk commands rather than duplicating toolbar actions permanently.

## Related patterns

| Need | Prefer |
| --- | --- |
| Simple structured data grid | **Table** |
| Sort, filter, selection at scale | [Data Table](/vue/components/data-table/design) |
| Spreadsheet-style interaction | [Data Grid](/vue/components/data-grid/design) |
| Key-value pairs | [Data List](/vue/components/data-list/design) |
