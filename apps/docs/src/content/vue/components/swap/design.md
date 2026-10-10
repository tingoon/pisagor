Swap crossfades or transitions between two pieces of content in the same space — play and pause icons, favorite on and off, or expand and collapse glyphs — so state change feels continuous rather than abrupt.

Prefer Swap for icon-sized or compact toggled visuals tied to one control; prefer [Switch](/vue/components/switch/design) or [Toggle](/vue/components/toggle/design) when the whole control must read as a standard form input.

## Best practices

**Keep both states the same size.** Lay out on and off content so the control does not shift surrounding UI when the swap runs.

**Animate briefly and purposefully.** Short transitions reinforce cause and effect; respect reduced-motion by cutting to the end state instantly when requested.

**Match meaning to accessibility.** Expose the current state in an accessible name (“Pause” vs “Play”) independent of which icon is visible.

**Use for binary visuals only.** Swap suits two mutually exclusive views; three or more states need a different pattern.

**Trigger from the owning control.** Swap should reflect the parent button or toggle’s state, not drive it in isolation.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Swap icons inside a button that already has a clear pressed or active state.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide critical text labels solely inside a swap with no stable readable label for assistive tech.</figcaption>
</figure>
</div>

## Performance

Prefer opacity or transform transitions over layout-thrashing properties so swaps stay smooth during repeated interaction.

## Related patterns

| Need | Prefer |
| --- | --- |
| Two-state icon transition | **Swap** |
| Setting with immediate effect | [Switch](/vue/components/switch/design) |
| Pressed toolbar control | [Toggle](/vue/components/toggle/design) |
| Show/hide arbitrary content | [Collapsible](/vue/components/collapsible/design) |
