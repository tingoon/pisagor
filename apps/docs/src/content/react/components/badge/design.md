A badge labels content with a compact status, category, or count so people can scan metadata quickly. It sits beside titles, rows, or icons without demanding the weight of a full message.

Prefer Badge for secondary labels; prefer [Alert](/react/components/alert/design) when the whole section must react to a page-level condition.

## Best practices

**Keep text short.** One or two words, or a small number — long sentences belong in body copy or tooltips.

**Use semantic variants sparingly.** Color should reinforce meaning (success, warning) not decorate every tag.

**Place badges near what they describe.** Align with the title or row they qualify so scanning stays linear.

**Do not replace sentences.** Badges summarize state; they should not carry instructions that require reading order across the page.

**Limit count badges.** Unread counts help until they become noise; cap display (99+) and clear counts when caught up.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use “Draft” or “3 open” beside the item they modify.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Cover primary titles with many colored badges that compete for attention.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Compact status or category | **Badge** |
| Page-level message | [Alert](/react/components/alert/design) |
| Live presence dot | [Status](/react/components/status/design) |
| Numeric KPI emphasis | [Stat](/react/components/stat/design) |
