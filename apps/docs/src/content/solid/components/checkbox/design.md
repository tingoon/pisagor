A checkbox lets people turn an individual option on or off, alone or as part of a multi-select group. Choices accumulate until the person submits or saves the form.

Prefer Checkbox when selection submits with a form; prefer [Switch](/solid/components/switch/design) when the setting applies immediately without a separate save step.

## Best practices

**Label click targets generously.** Pair each box with a visible label so the hit area includes text, not just the square.

**Use groups with legends.** Fieldset or group labels explain what the set of checkboxes controls.

**Show indeterminate parents.** When a parent row partially selects children, indeterminate state must reflect partial selection accurately.

**Avoid mutually exclusive options in one group.** Radio-style exclusivity belongs in [Radio Group](/solid/components/radio-group/design), not mixed checkboxes.

**Expose errors at the group level.** When at least one selection is required, associate the message with the group name.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a clear group label and vertical list of options with full-width labels.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a single checkbox for two opposite meanings without explicit on/off copy.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Multi-select or boolean in forms | **Checkbox** |
| Immediate on/off setting | [Switch](/solid/components/switch/design) |
| Exactly one of several options | [Radio Group](/solid/components/radio-group/design) |
| Select all rows in a table | [Action Bar](/solid/components/action-bar/design) with row selection |
