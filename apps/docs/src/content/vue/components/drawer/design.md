Drawer slides a panel over the page for secondary tasks or details without leaving the current context. It preserves spatial continuity while giving more room than a centered modal.

Prefer Drawer for supplemental detail and multi-field side tasks, especially from the bottom on phones. Prefer [Dialog](/vue/components/dialog/design) for brief centered decisions; prefer [Sheet](/vue/components/sheet/design) when your design system standardizes edge panels with the same API across breakpoints.

## Best practices

**Anchor from a predictable edge.** Bottom drawers suit thumb reach on mobile; side drawers suit master–detail on desktop — stay consistent within your product.

**Support swipe or drag to dismiss when appropriate.** Let people interrupt the motion mid-gesture; honor reduced motion with shorter transitions.

**Keep primary page context visible.** Partial overlays help people remember where they came from; full-screen drawers should still offer an obvious back or close.

**Limit content depth.** If the drawer needs its own navigation stack, consider a dedicated route instead.

**Restore focus on close.** Return focus to the element that opened the drawer and persist scroll position on the page behind.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Open a bottom drawer for filters or item detail while keeping the list visible behind.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Stack a drawer on top of a dialog for the same task flow.</figcaption>
</figure>
</div>

## vs Sheet

Use Drawer when your interaction model emphasizes gesture-driven dismissal and partial height panels. Use Sheet when you want edge-aligned panels with explicit side placement across form factors.

## Related patterns

| Need | Prefer |
| --- | --- |
| Sliding panel for secondary work | **Drawer** |
| Standardized edge panel | [Sheet](/vue/components/sheet/design) |
| Short modal decision | [Dialog](/vue/components/dialog/design) |
| Non-blocking contextual content | [Popover](/vue/components/popover/design) |
