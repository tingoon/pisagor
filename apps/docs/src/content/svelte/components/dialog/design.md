Dialog focuses attention on a task or decision in a modal layer above the current page. It interrupts briefly so people can finish something important without losing overall context.

Prefer Dialog for short, self-contained tasks and confirmations that are not inherently destructive. Prefer [Alert Dialog](/svelte/components/alert-dialog/design) when the user must acknowledge risk before continuing; prefer [Sheet](/svelte/components/sheet/design) or [Drawer](/svelte/components/drawer/design) for edge-anchored flows, especially on mobile.

## Best practices

**Keep copy concise.** State why the dialog appeared, what happens next, and what the primary action does — in plain language.

**Offer one clear primary action.** Name the button after the outcome (Save, Send invite) and use a safe secondary such as Cancel.

**Trap focus without trapping forever.** Move focus into the dialog on open, cycle within it, and restore focus to the trigger on close.

**Allow dismiss when work is not committed.** Support Escape and a visible close control for non-destructive flows; block casual dismiss only when data loss is real.

**Avoid stacking dialogs.** Replace or step within one layer rather than opening a second modal on top of the first.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use Dialog for a short form or confirmation with a named primary action and Cancel.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Open Dialog for long multi-step wizards better suited to a full page or drawer.</figcaption>
</figure>
</div>

## Modal weight

Use a dimmed scrim when the task requires full attention. Choose non-modal [Dialog](/svelte/components/dialog/design) variants only when people must reference content behind the layer while editing.

## Related patterns

| Need | Prefer |
| --- | --- |
| Focused task or decision | **Dialog** |
| Destructive or irreversible confirm | [Alert Dialog](/svelte/components/alert-dialog/design) |
| Edge panel on mobile | [Sheet](/svelte/components/sheet/design) / [Drawer](/svelte/components/drawer/design) |
| Lightweight contextual panel | [Popover](/svelte/components/popover/design) |
