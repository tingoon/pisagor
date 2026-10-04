A hover card reveals richer preview content when someone pauses on a trigger—profile snippets, link summaries, or metadata—without opening a modal or stealing focus from the page.

Prefer Hover Card when preview content is more than a short label but still glanceable; prefer [Tooltip](/react/components/tooltip/design) for one-line hints. Prefer [Popover](/react/components/popover/design) when the user must click to open stable content or interact inside the surface. Prefer [Dialog](/react/components/dialog/design) when the task requires full attention or multi-step input.

## Best practices

**Tune open and close delays.** Wait briefly before opening so casual pointer passes do not flash content; keep the card open while the pointer moves into it.

**Anchor to the trigger.** Position the card from the element that owns the preview so the spatial relationship stays obvious.

**Keep previews lightweight.** Show a photo, title, meta, and one optional action—defer heavy forms and long scroll areas to a popover or page.

**Support keyboard and touch.** Offer an equivalent focus path on keyboard; on touch, use tap-to-open preview or inline expansion instead of hover-only discovery.

**Do not hide essential information.** Critical facts belong in the visible UI, not only in a hover card.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Preview an author name with avatar, role, and a link to their profile on hover or focus.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Put required pricing, deadlines, or warnings only inside a hover card.</figcaption>
</figure>
</div>

## Motion

Enter and exit along the same path from the trigger, with short critically damped motion. Honor `prefers-reduced-motion` with cross-fades instead of large travel.

## Related patterns

| Need | Prefer |
| --- | --- |
| Rich glanceable preview | **Hover Card** |
| Single-line non-blocking hint | [Tooltip](/react/components/tooltip/design) |
| Click-open anchored surface | [Popover](/react/components/popover/design) |
| Blocking task | [Dialog](/react/components/dialog/design) |
