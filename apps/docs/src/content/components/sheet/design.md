Sheet slides a panel in from the edge of the screen for secondary tasks — filters, detail views, mobile navigation — while keeping context on the page behind. It suits compact layouts where a centered dialog would feel cramped.

Prefer Sheet for edge-attached panels and mobile-first flows; prefer [Drawer](/react/components/drawer/design) when bottom sheets and swipe-to-dismiss match platform patterns for the same role. Prefer [Dialog](/react/components/dialog/design) for focused modal decisions on larger screens. Prefer [Sidebar](/react/components/sidebar/design) for persistent app navigation rather than ephemeral tasks.

## Best practices

**Limit depth of work.** Sheets excel at quick edits, pickers, and navigation — not multi-step wizards unless steps stay short.

**Provide a clear title and close path.** Header title plus dismiss control and swipe/overlay dismiss (when appropriate) prevent people feeling trapped.

**Preserve context on desktop.** Semi-transparent scrim or visible page edge reminds people what sits beneath; avoid full opaque takeover unless the task is modal.

**Move focus into the sheet on open.** Trap focus inside only when modal; return focus to the trigger on close.

**Respect safe areas.** Pad bottom sheets for home indicators and notches on phones.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Open filters or item details in a sheet on mobile while keeping the list visible underneath on tablet and up when non-modal.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force critical confirmations only in a sheet without focus management — use Alert Dialog when the decision must block.</figcaption>
</figure>
</div>

## vs popover

Popovers anchor to a trigger; sheets own an edge of the viewport. Use popovers for small trigger-tied menus; use sheets when content needs full height or thumb reach along an edge.

## Related patterns

| Need | Prefer |
| --- | --- |
| Edge panel for secondary task | **Sheet** |
| Bottom swipe panel | [Drawer](/react/components/drawer/design) |
| Centered blocking flow | [Dialog](/react/components/dialog/design) |
| Persistent app navigation | [Sidebar](/react/components/sidebar/design) |
