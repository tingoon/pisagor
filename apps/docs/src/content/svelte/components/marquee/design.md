Marquee scrolls content horizontally in a continuous loop—logos, quotes, partner strips—when motion adds energy without carrying critical instructions.

Treat it as ambient chrome, not the primary way to deliver information people must read completely.

## Best practices

**Pause on hover and focus.** Let people stop the strip to read a name or follow a link without chasing text.

**Respect reduced motion.** Replace infinite scroll with a static row or a manual control when `prefers-reduced-motion` is set.

**Keep speed comfortable.** Slow enough to read short labels; faster only when content is purely decorative logos.

**Duplicate content seamlessly.** Loop without a visible jump; avoid stutter when the animation restarts.

**Limit concurrent marquees.** One strip per view is usually enough; multiple loops compete for attention and accessibility.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Loop partner logos slowly with pause-on-hover and a static fallback for reduced motion.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Marquee safety warnings or pricing terms people must read to complete a task.</figcaption>
</figure>
</div>

## Content

Link individual tiles when each logo or quote has a destination; otherwise keep the strip non-interactive and purely decorative.

## Related patterns

| Need | Prefer |
| --- | --- |
| Continuous horizontal loop | **Marquee** |
| User-controlled slides | [Carousel](/svelte/components/carousel/design) |
| Static logo row | [Item](/svelte/components/item/design) |
| Promo callout | [Announcement](/svelte/components/announcement/design) |
