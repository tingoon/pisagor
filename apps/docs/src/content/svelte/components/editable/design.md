Editable turns static text into inline editing so people can update a value where it already appears. It reduces context switching for quick corrections to titles, labels, and single fields.

Prefer Editable for one-off text updates in place. Prefer a [Dialog](/svelte/components/dialog/design) or dedicated form when editing many related fields or when validation needs space to explain errors.

## Best practices

**Signal editability.** Show a hover affordance, pencil icon, or focus ring on the trigger so static text is not mistaken for read-only content.

**Commit and cancel clearly.** Enter or explicit Save commits; Escape reverts; blur behavior should match user expectations documented in helper text if ambiguous.

**Validate inline without surprise.** Show errors next to the value and prevent silent failure when the server rejects an update.

**Preserve typography.** The edit control should match the surrounding text size and weight so the layout does not jump when editing starts.

**Use sparingly on critical identifiers.** For slugs, billing names, or legal text, prefer a form with review step over instant inline replace.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Let people rename a project title inline with Save/Cancel and inline error text.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Make every cell in a table inline-editable when bulk edit or a side panel is safer.</figcaption>
</figure>
</div>

## Accessibility

Ensure keyboard users can enter edit mode, move through the input, and exit without trapping focus. Announce state changes when switching between display and edit modes.

## Related patterns

| Need | Prefer |
| --- | --- |
| Single-value inline edit | **Editable** |
| Label + control + errors | [Field](/svelte/components/field/design) |
| Read-only fact list | [Data List](/svelte/components/data-list/design) |
| Multi-field edit | [Dialog](/svelte/components/dialog/design) + form fields |
