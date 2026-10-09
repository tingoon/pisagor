A popover anchors supplementary content to a trigger — compact forms, filters, menus, or details — without taking over the whole screen. It keeps context visible while people complete a small, localized task.

Prefer Popover for lightweight, trigger-scoped work; prefer [Dialog](/vue/components/dialog/design) when the flow needs stronger focus or a blocking decision. Prefer [Hover Card](/vue/components/hover-card/design) for read-only previews on hover or focus, and [Tooltip](/vue/components/tooltip/design) for a single short phrase that must not contain interactive controls.

## Best practices

**Keep content focused.** One clear purpose per popover — pick a date, tweak filters, choose from a short list — so it does not become a mini page.

**Choose modal with intent.** Use modal when interaction outside would cause data loss or confusion; stay non-modal when people need to reference the page behind.

**Return focus to the trigger.** When the popover closes, restore focus so keyboard users stay oriented.

**Size to the task, not the viewport.** Let the panel grow only as much as the content needs; avoid full-width popovers that duplicate sheet behavior.

**Dismiss predictably.** Support Escape, an explicit close control, and clicking outside when non-modal — match platform expectations.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a popover for a small form or menu tied to the control that opened it.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Put multi-step workflows or legal confirmations in a popover when a dialog or sheet fits better.</figcaption>
</figure>
</div>

## Placement

Prefer placement that keeps the trigger and popover on screen together. Flip or shift when near edges so content stays readable without covering the anchor.

## Related patterns

| Need | Prefer |
| --- | --- |
| Anchored compact task or menu | **Popover** |
| Blocking task or decision | [Dialog](/vue/components/dialog/design) |
| Rich hover preview | [Hover Card](/vue/components/hover-card/design) |
| Single-line hint | [Tooltip](/vue/components/tooltip/design) |
| Edge panel on small screens | [Sheet](/vue/components/sheet/design) |
