Input captures a single line of text—names, search queries, codes, and other short values—in a focused control tuned for typing speed and clarity.

Prefer Input for the raw control alone; wrap it in [Field](/react/components/field/design) (or a form field primitive) when label, description, and error text must ship together. Prefer [Input Group](/react/components/input-group/design) when icons, prefixes, or inline buttons belong on the same control. Prefer [Password Input](/react/components/password-input/design) for credentials with show-hide affordances.

## Best practices

**Pair every input with a visible label.** Placeholder text is not a substitute for a label; keep placeholders for format hints only.

**Validate inline as people type or on blur.** Surface errors next to the field with specific guidance instead of waiting for submit.

**Choose the right type and autocomplete.** Use `email`, `tel`, and `search` when browsers can help, and set autocomplete tokens for names and addresses.

**Size for expected content.** Match width to typical values so forms feel intentional, not stretched or cramped.

**Indicate required and disabled states clearly.** Do not rely on color alone; use text and cursor behavior people can predict.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a labeled Input with helper text for format and an inline error when validation fails.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Stack five unlabeled inputs and reveal every error only after Submit.</figcaption>
</figure>
</div>

## Search and filters

For search that drives a list, debounce network calls but keep the input itself instant. Clear buttons belong when a non-empty query is common.

## Related patterns

| Need | Prefer |
| --- | --- |
| Single-line text entry | **Input** |
| Label + error layout | [Field](/react/components/field/design) |
| Prefix, suffix, or inline action | [Input Group](/react/components/input-group/design) |
| Secret credentials | [Password Input](/react/components/password-input/design) |
| Multi-line copy | [Textarea](/react/components/textarea/design) |
| Numeric quantities | [Number Input](/react/components/number-input/design) |
