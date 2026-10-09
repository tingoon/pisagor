JSON Tree View presents nested objects and arrays as an expandable tree so developers and support staff can inspect payloads without raw monospace walls.

Use it in debug panels, API explorers, and admin tools—not for end-user content unless the audience expects structured data.

## Best practices

**Expand high-signal nodes first.** Open paths relevant to the current task; keep large siblings collapsed by default.

**Copy paths and values safely.** Offer copy on keys and leaf values; confirm before copying secrets when payloads may include tokens.

**Syntax-type values distinctly.** Differentiate strings, numbers, booleans, and null with subtle color and labels readable in both themes.

**Virtualize very large trees.** Lazy-load or window long arrays so expanding one node does not freeze the page.

**Pair with search when documents are deep.** Jump to matching keys or values and highlight hits with [Highlight](/svelte/components/highlight/design) where appropriate.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Collapse a 200-key object and let people expand only the branch they need.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Dump pretty-printed JSON into a paragraph for non-technical customers.</figcaption>
</figure>
</div>

## Safety

Redact or mask known sensitive fields by default in shared screens. Make read-only mode obvious when editing would be dangerous.

## Related patterns

| Need | Prefer |
| --- | --- |
| Inspect nested JSON | **JSON Tree View** |
| Hierarchical settings | [Tree View](/svelte/components/tree-view/design) |
| Tabular API results | [Data Table](/svelte/components/data-table/design) |
| Match emphasis in strings | [Highlight](/svelte/components/highlight/design) |
