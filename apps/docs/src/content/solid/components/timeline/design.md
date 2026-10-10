Timeline shows a sequence of events or milestones over time so people can follow history, progress, or an audit trail. Each item anchors to a point on a vertical or horizontal axis with optional metadata.

Prefer Timeline for narrative or chronological sequences; prefer [Steps](/solid/components/steps/design) when the audience is completing a forward-only process, not reading the past.

## Best practices

**Order events clearly.** Newest-first or oldest-first should match the task — activity feeds often reverse; compliance logs often ascend.

**Make timestamps scannable.** Use consistent relative or absolute formatting; show time zone when events cross regions.

**Keep item titles action-oriented.** Lead with what happened; tuck IDs and technical detail into secondary lines or expandable bodies.

**Differentiate event types.** Icon or color coding helps when many kinds of events share one stream — always duplicate meaning in text.

**Avoid infinite unbounded lists.** Paginate, load more, or filter by date range so performance and comprehension stay healthy.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Connect each entry to a date and a human-readable summary of the event.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a timeline for a static feature list with no time dimension — use prose or [Data List](/solid/components/data-list/design).</figcaption>
</figure>
</div>

## Density

On small screens, collapse secondary metadata behind expansion or show a compact single-line row with detail on tap.

## Related patterns

| Need | Prefer |
| --- | --- |
| Chronological event stream | **Timeline** |
| Active multi-step flow | [Steps](/solid/components/steps/design) |
| KPI snapshot | [Stat](/solid/components/stat/design) |
| Nested history in tree form | [Tree View](/solid/components/tree-view/design) |
