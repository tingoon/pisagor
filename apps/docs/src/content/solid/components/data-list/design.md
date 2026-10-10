Data List presents label–value pairs in a readable list for summaries, metadata, and detail panels. It helps people scan facts without the visual weight of a full table.

Prefer Data List for object detail and settings summaries. Prefer [Data Table](/solid/components/data-table/design) or [Table](/solid/components/table/design) when comparing many entities across the same columns.

## Best practices

**Align labels and values consistently.** Use a predictable column for labels and let values wrap or truncate with access to full text when needed.

**Order by importance.** Put the identifiers and status people need first; tuck historical or technical metadata lower.

**Keep labels plain language.** Prefer “Created” over internal field names unless the audience is explicitly technical.

**Use empty values intentionally.** Show an em dash or “Not set” instead of blank rows that look like layout bugs.

**Pair with actions sparingly.** When a value is editable, link to edit or use [Editable](/solid/components/editable/design) on high-touch fields only.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Present profile or invoice metadata as a scannable label–value list.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force a single-column Data List to compare twenty products side by side.</figcaption>
</figure>
</div>

## Layout

On narrow viewports, stack label above value when horizontal space is tight. Maintain sufficient contrast between label and value so hierarchy remains clear in light and dark themes.

## Related patterns

| Need | Prefer |
| --- | --- |
| Detail metadata and summaries | **Data List** |
| Comparable rows across columns | [Data Table](/solid/components/data-table/design) |
| Inline edit of a displayed value | [Editable](/solid/components/editable/design) |
| Form-style label + control | [Field](/solid/components/field/design) |
