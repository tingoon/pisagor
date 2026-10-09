Surface provides a semantic background layer for grouped content — cards, panels, sidebars, and inset regions — so hierarchy reads through elevation, border, and fill rather than ad hoc colors.

Prefer Surface as the shared backdrop primitive; compose [Card](/svelte/components/card/design) or [Frame](/svelte/components/frame/design) when you need titled chrome, actions, or media framing on top of that layer.

## Best practices

**Use surfaces to group, not decorate.** Each surface should answer “this belongs together”; avoid nesting many identical layers that add noise without structure.

**Stay consistent with theme tokens.** Rely on design tokens for background and border so light, dark, and high-contrast modes remain coherent.

**Contrast content against the surface.** Text and icons on a surface must meet readability standards for the chosen variant (default, muted, elevated).

**Reserve elevation for depth.** Higher surfaces should mean closer or more prominent content — modals above cards, cards above page background.

**Keep interactive targets on components.** Surface is not a button; put clicks on [Button](/svelte/components/button/design) or [Link Box](/svelte/components/link-box/design) inside the surface.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use one clear surface per logical group with consistent padding inside the boundary.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Stack multiple full-bleed surfaces with identical styling — flatten the hierarchy or differentiate purpose.</figcaption>
</figure>
</div>

## Composition

Pair Surface with [Separator](/svelte/components/separator/design) or spacing utilities to divide sections without adding another full panel when a line suffices.

## Related patterns

| Need | Prefer |
| --- | --- |
| Background layer for a group | **Surface** |
| Titled content block | [Card](/svelte/components/card/design) |
| Media or document frame | [Frame](/svelte/components/frame/design) |
| Page shell layout | [App Shell](/svelte/components/app-shell/design) |
