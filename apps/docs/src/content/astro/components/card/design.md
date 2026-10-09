A card groups related content and actions into a contained surface people scan as one unit. Elevation or border separates the block from its neighbors without implying a separate route.

Prefer Card when the block is a peer among other cards; prefer [Surface](/astro/components/surface/design) when you only need background layering without a bounded module.

## Best practices

**One idea per card.** Title, supporting text, and actions should share a single subject — split overloaded cards rather than stacking unrelated tools.

**Order for scanning.** Put the title first, metadata next, actions last so eyes move top to bottom naturally.

**Limit competing actions.** One primary action per card; tuck secondary work into a Menu when many commands apply.

**Make the whole card clickable only when appropriate.** If the entire surface navigates, avoid nested buttons that fight the link; use [Link Box](/astro/components/link-box/design) patterns thoughtfully.

**Keep density consistent.** Align padding and typography across a grid so cards feel like a set, not accidental boxes.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Present a title, short summary, and one clear action for each item in a grid.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Nest multiple primary buttons and full forms inside a small preview card.</figcaption>
</figure>
</div>

## Layout

Cards work in grids, stacks, and carousels. Fixed media heights pair well with [Aspect Ratio](/astro/components/aspect-ratio/design) so rows align.

## Related patterns

| Need | Prefer |
| --- | --- |
| Bounded content module | **Card** |
| Background layer only | [Surface](/astro/components/surface/design) |
| Expandable sections | Accordion |
| Horizontal set of modules | Carousel |
