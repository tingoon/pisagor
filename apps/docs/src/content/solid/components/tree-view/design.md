Tree View browses nested folders, categories, or nodes in an expandable hierarchy — files, org units, permissions, or picker sidebars — where depth and parent-child relationships matter.

Prefer Tree View when structure is hierarchical and people drill in; prefer [Table](/solid/components/table/design) or [Data Table](/solid/components/data-table/design) for flat tabular comparison. Prefer [Accordion](/solid/components/accordion/design) for one level of expandable sections without deep nesting.

## Best practices

**Show expansion affordance consistently.** Carets or chevrons align with platform convention; expanded state must be exposed to assistive technology.

**Support keyboard tree semantics.** Arrow keys expand, collapse, and move between nodes; typeahead helps long lists.

**Lazy-load heavy branches.** Fetch children on expand when directories are large; show loading on the node, not the whole tree.

**Preserve expanded paths when returning.** Remember open folders for the session when people navigate away and back.

**Offer selection models deliberately.** Single select, multi select, and checkbox trees each fit different tasks — do not mix models without clear rules.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Indent levels clearly and label each node with its name, not only an icon.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force a deep file tree into a flat [Select](/solid/components/select/design) — hierarchy belongs in Tree View.</figcaption>
</figure>
</div>

## Search and filter

When trees are large, provide filter-as-you-type that expands matching paths and dims unrelated branches.

## Related patterns

| Need | Prefer |
| --- | --- |
| Nested expandable hierarchy | **Tree View** |
| Shallow expandable sections | [Accordion](/solid/components/accordion/design) |
| Flat sorted rows | [Data Table](/solid/components/data-table/design) |
| Reorder flat list | [Sortable](/solid/components/sortable/design) |
