Textarea captures longer text over multiple lines — messages, notes, descriptions, and comments — where a single-line [Input](/solid/components/input/design) would feel cramped or wrong.

Prefer Textarea when line breaks matter or content routinely exceeds one line; prefer [Rich Text Editor](/solid/components/rich-text-editor/design) when formatting, lists, or embeds are required.

## Best practices

**Size to expected content.** Default height should show at least two or three lines; allow vertical resize when users may write at length.

**Pair with a visible label.** Every textarea needs a [Field](/solid/components/field/design) label and optional description — placeholder is not a substitute.

**Show limits honestly.** Character or word counts belong near the control when limits exist; validate before submit.

**Preserve drafts when it helps.** Long forms benefit from autosave or warn-on-navigate so accidental loss is rare.

**Support paste and spellcheck.** Do not disable platform behaviors unless security truly requires it.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use helper text to explain tone, format, or privacy expectations for open-ended input.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a textarea for a single token, date, or number — use the focused control for that type.</figcaption>
</figure>
</div>

## Errors

Show validation beside the textarea and move focus to the first invalid field on submit. Error text should say how to fix the problem, not only that it failed.

## Related patterns

| Need | Prefer |
| --- | --- |
| Multi-line plain text | **Textarea** |
| Single-line text | [Input](/solid/components/input/design) |
| Many structured tokens | [Tags Input](/solid/components/tags-input/design) |
| Formatted content | [Rich Text Editor](/solid/components/rich-text-editor/design) |
