Aspect ratio locks a container to a consistent width-to-height proportion as the layout resizes. Media and embeds keep their shape instead of stretching or collapsing unpredictably.

Prefer aspect ratio for video, maps, and product imagery; avoid it when height should grow freely with text-heavy content inside the same region.

## Best practices

**Pick ratios that match content.** Common cinematic and square ratios reduce letterboxing; match the asset’s native proportion when known.

**Reserve space before media loads.** A fixed ratio prevents layout shift when images or iframes arrive, which keeps reading flow stable.

**Center or crop intentionally.** Use object-fit behavior that preserves faces and product detail rather than arbitrary stretching.

**Pair with accessible alternatives.** Provide alt text for images and a title or label for embeds so meaning is not only visual.

**Do not trap scrolling text.** Long captions belong outside the ratio box unless the box is explicitly a scroll region.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Hold a 16:9 or product-specific ratio so grids of cards align cleanly.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Force article body copy inside a fixed-ratio box that clips overflow without warning.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Stable media proportions | **Aspect Ratio** |
| Grouped media and actions | [Card](/solid/components/card/design) |
| Full-bleed framed content | [Frame](/solid/components/frame/design) |
| Stepped image browsing | [Carousel](/solid/components/carousel/design) |
