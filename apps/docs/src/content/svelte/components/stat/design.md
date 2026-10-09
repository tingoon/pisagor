Stat presents a metric with supporting context — label, trend, comparison, or helper text — so people can scan performance, counts, or KPIs at a glance.

Use Stat on dashboards and summary rows where numbers need hierarchy without building a full chart. Prefer [Card](/svelte/components/card/design) when the whole block is clickable or contains rich actions beyond the number.

## Best practices

**Lead with the number people care about.** Make the primary value the largest, most prominent element; keep the label secondary but always visible.

**Add context, not clutter.** One line of trend, delta, or period (“vs last week”) usually suffices; avoid stacking many competing figures in one stat.

**Use consistent formatting.** Align decimals, units, and abbreviations across a row of stats so comparisons are honest and easy.

**Choose semantics for deltas carefully.** Color and arrows should reinforce good/bad only when direction truly implies success or risk in your domain.

**Group related stats.** Place stats that answer one question side by side; separate unrelated metrics with space or section headings.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Label each metric and show the time range or unit the number represents.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Present raw database IDs or unlabeled percentages that could mean completion, share, or growth.</figcaption>
</figure>
</div>

## Loading and empty states

While data loads, use [Skeleton](/svelte/components/skeleton/design) or a subdued placeholder that preserves stat layout. When no data exists, say so plainly instead of showing zero by default.

## Related patterns

| Need | Prefer |
| --- | --- |
| Scannable metric with label | **Stat** |
| Compact state dot | [Status](/svelte/components/status/design) |
| Count on an object | [Badge](/svelte/components/badge/design) |
| Tabular comparison | [Table](/svelte/components/table/design) |
| Event sequence | [Timeline](/svelte/components/timeline/design) |
