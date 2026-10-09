An alert dialog interrupts the task with a focused confirmation before a destructive or irreversible action runs. It forces a deliberate choice so mistakes are harder to make by accident.

Prefer Alert Dialog when the cost of error is high; prefer [Alert](/vue/components/alert/design) or [Toast](/vue/components/toast/design) when information does not require a decision before work continues.

## Best practices

**Name the consequence.** The title and description should state what will happen if the person confirms — delete, revoke access, discard edits — in plain language.

**Separate confirm from cancel.** Place the destructive action on the side people expect for commitment in your platform, and keep Cancel visually quieter but equally reachable.

**Avoid surprise opens.** Trigger the dialog only from an explicit action the person already chose, not from passive navigation or background timers.

**Require one decision.** Do not nest secondary tasks inside the dialog; collect extra input in a [Dialog](/vue/components/dialog/design) when the flow is more than confirm or cancel.

**Restore focus on close.** Return focus to the control that opened the dialog so keyboard users stay oriented.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a specific title (“Delete project?”) and describe what cannot be undone.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use an alert dialog for routine information that does not need a hard stop.</figcaption>
</figure>
</div>

## Actions

Label the primary button with the verb that will run — Delete, Remove, Discard — not generic OK. Disable double submission while the action is in flight and show progress on the confirming control when the operation takes time.

## Related patterns

| Need | Prefer |
| --- | --- |
| Confirm destructive or irreversible work | **Alert Dialog** |
| Rich form or multi-step task in a modal | [Dialog](/vue/components/dialog/design) |
| Non-blocking warning | [Alert](/vue/components/alert/design) |
| Bottom-sheet confirmation on mobile | [Sheet](/vue/components/sheet/design) |
