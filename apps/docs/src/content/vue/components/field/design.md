Field wraps a form control with label, description, and error text so inputs are easier to complete correctly. It is the standard way to connect human-readable labels to machine-readable controls.

Use Field for every interactive control in a form unless a higher-level pattern already composes labels for you. Avoid orphan placeholders without labels when the question is non-obvious.

## Best practices

**Every control needs a visible or programmatic label.** Link label to input with `htmlFor` / `id`; do not rely on placeholder alone.

**Describe constraints up front.** Use description for format hints, optional markers, and character limits before errors occur.

**Show errors next to the field.** On submit or blur, place error text beneath the control and associate it for assistive tech.

**Group related fields logically.** Use fieldsets or section headings for address blocks and payment details without nesting Fields unnecessarily deep.

**Indicate required fields consistently.** Mark required once in the label or form legend; do not scatter asterisks without a legend explaining meaning.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Wrap Email with label, optional helper, and inline error when validation fails.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show only “Invalid input” at the top of a long form without per-field messages.</figcaption>
</figure>
</div>

## Disabled and read-only

When a field is disabled, explain why in description text if the reason is not obvious. Read-only values in forms may belong in [Data List](/vue/components/data-list/design) instead of disabled inputs.

## Related patterns

| Need | Prefer |
| --- | --- |
| Label + control + help + error | **Field** |
| Text entry | [Input](/vue/components/input/design) / [Textarea](/vue/components/textarea/design) |
| Date in a form | [Date Picker](/vue/components/date-picker/design) in Field |
| Pick one of many options | [Select](/vue/components/select/design) in Field |
