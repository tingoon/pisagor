Tags Input lets people build a list of values — emails, skills, labels — by typing and confirming each entry as a removable chip. It suits multi-value fields where free text and structured tokens mix.

Prefer Tags Input over a comma-separated [Textarea](/react/components/textarea/design) when each tag should be editable, removable, and validated individually. Prefer [Select](/react/components/select/design) when choices come from a fixed catalog only.

## Best practices

**Validate each tag on add.** Reject malformed tokens with inline feedback at the field, not only on form submit.

**Make removal obvious.** Each chip needs a clear remove control with an accessible name (“Remove design”).

**Define separators and commit keys.** Enter, comma, or blur-to-add should match platform expectations and be documented in helper text when nonstandard.

**Limit count and length when needed.** Show remaining capacity for plans with quotas; truncate display with tooltip only if full value is still available to assistive tech.

**Support keyboard flow.** Backspace on an empty input should focus or delete the previous chip predictably.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show chips for accepted values and keep the text field for the next entry.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide invalid tags silently — tell people why an address or slug was rejected.</figcaption>
</figure>
</div>

## Suggestions

When offering autocomplete, align suggestions with [Combobox](/react/components/combobox/design) behavior: choose from list or create new when allowed.

## Related patterns

| Need | Prefer |
| --- | --- |
| Multiple freeform or validated tokens | **Tags Input** |
| Fixed multi-select | [Select](/react/components/select/design) |
| Long prose | [Textarea](/react/components/textarea/design) |
| Display-only labels | [Badge](/react/components/badge/design) |
