Radio Group lets people choose exactly one option from a small set of related choices. Every option is visible at once, so tradeoffs stay easy to compare without opening a menu.

Prefer Radio Group when there are roughly two to seven mutually exclusive options and seeing all labels aids the decision. Prefer [Select](/react/components/select/design) when space is tight or the list is long. Prefer [Segment Group](/react/components/segment-group/design) for switching views or modes with a compact control, and [Toggle Group](/react/components/toggle-group/design) when multiple selections or non-exclusive toggles are valid.

## Best practices

**Label the group and each option.** The group label states what is being chosen; each radio names a distinct alternative.

**Order options meaningfully.** Use logical order — frequency, severity, or chronological — not arbitrary database order.

**Expose a default only when appropriate.** Pre-select the safest or most common choice when it helps; avoid hiding that a choice is required.

**Keep options mutually exclusive.** If two choices can apply together, use checkboxes or a toggle group instead.

**Show selection clearly.** Selected state should be obvious by more than color alone — fill, border, or label weight.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Present a short, scannable list of radios with a clear group label when all options should be visible.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use radios for ten-plus items or for view switching that behaves like tabs — use Select or Segment Group instead.</figcaption>
</figure>
</div>

## Layout

Vertical stacks read best for longer labels; horizontal rows suit two or three short options. Align with [Field](/react/components/field/design) for validation messages.

## Related patterns

| Need | Prefer |
| --- | --- |
| One of few visible options | **Radio Group** |
| Long or space-constrained list | [Select](/react/components/select/design) |
| Switch views or modes | [Segment Group](/react/components/segment-group/design) |
| Multiple independent toggles | [Toggle Group](/react/components/toggle-group/design) |
