Presence keeps elements in the tree long enough to animate out gracefully, then removes them when exit motion completes. Enter and leave transitions feel continuous instead of snapping away.

Use Presence around conditionally rendered UI — overlays, expandable regions, toasts — where motion should respect reduced-motion settings and not block interaction longer than necessary.

## Best practices

**Animate only what changes.** Wrap the smallest subtree that actually enters or exits so layout and focus stay stable.

**Honor reduced motion.** Provide instant show/hide or subtle opacity when people prefer reduced motion; avoid long or distracting transitions.

**Keep durations short.** Favor quick, purposeful motion (roughly 150–250ms for simple fades) so the interface stays responsive.

**Coordinate with focus management.** When content unmounts, move focus to a sensible target — often the trigger — before the node disappears from the accessibility tree.

**Avoid nesting competing presences.** One clear enter/exit owner per surface prevents double animations or stuck opacity.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Wrap dialog panels, tooltips, or collapsible bodies so exit animations finish before unmount.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Animate large page regions on every data refresh where a skeleton or inline update is enough.</figcaption>
</figure>
</div>

## Implementation notes

Presence is a building block, not a visual pattern people choose from a menu. Document motion in the components that use it rather than exposing Presence as end-user chrome.

## Related patterns

| Need | Prefer |
| --- | --- |
| Smooth mount/unmount motion | **Presence** |
| Show/hide with height animation | [Collapsible](/svelte/components/collapsible/design) |
| Transient notification | [Toast](/svelte/components/toast/design) |
| Modal enter/exit | [Dialog](/svelte/components/dialog/design) |
