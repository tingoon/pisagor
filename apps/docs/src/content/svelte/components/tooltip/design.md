Tooltip reveals a short hint on hover or keyboard focus — naming an icon-only control, clarifying a label, or expanding an abbreviation. It supplements the interface without blocking interaction or moving layout.

Prefer Tooltip for supplementary text under about ten words; prefer [Hover Card](/svelte/components/hover-card/design) when people need richer preview content, links, or multiple lines that invite exploration.

## Best practices

**Never put essential information only in a tooltip.** If everyone must read it to succeed, promote it to visible label or helper text.

**Keep copy concise.** One brief phrase or sentence; split long guidance into [Popover](/svelte/components/popover/design) on intentional click.

**Show on focus as well as hover.** Keyboard users must receive the same hint as pointer users.

**Avoid tooltips on disabled controls without explanation.** Prefer wrapping with a focusable element or explaining why the action is unavailable in visible copy.

**Do not nest interactive content.** Tooltips are non-modal hints, not mini dialogs — no buttons inside unless upgrading to hover card or popover.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Tooltip an icon-only “Share” button with the word Share.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide field requirements in a tooltip people may never open — put requirements in the [Field](/svelte/components/field/design) description.</figcaption>
</figure>
</div>

## Timing and dismissal

Delay show slightly to avoid flicker during casual pointer movement; hide when focus leaves. Respect reduced motion for any entrance animation.

## Related patterns

| Need | Prefer |
| --- | --- |
| Short non-blocking hint | **Tooltip** |
| Rich preview on hover | [Hover Card](/svelte/components/hover-card/design) |
| Click-open supplementary panel | [Popover](/svelte/components/popover/design) |
| Persistent explanation | Visible label or [Alert](/svelte/components/alert/design) |
