Scroll Area wraps overflow content with theme-aligned scrollbars and optional edge fades so long regions scroll smoothly inside fixed layouts — side panels, tables, and nested cards — without breaking page-level scroll.

Prefer Scroll Area when a region has its own scroll affordance; prefer the document body for primary page scrolling unless layout truly requires a nested viewport.

## Best practices

**Give the region a defined size.** Scroll Area needs a bounded height or width; otherwise overflow may expand the page instead of scrolling internally.

**Keep keyboard scroll working.** Focusable content inside should remain reachable; do not steal wheel events from the whole page without cause.

**Use fades sparingly.** Edge fades hint at more content; avoid them when they obscure text or clash with sticky headers.

**Match scrollbar visibility to platform.** Show persistent scrollbars on dense data UIs; prefer overlay or auto-hide scrollbars on consumer layouts when appropriate.

**Avoid deep nesting.** Multiple nested scroll areas confuse scroll chaining; restructure before adding a third level.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Constrain side panels and dialog bodies with Scroll Area so headers and footers stay fixed.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Wrap an entire marketing page in Scroll Area when native document scroll is simpler and more accessible.</figcaption>
</figure>
</div>

## Tables and lists

Pair with sticky row headers or column labels inside the scroll viewport when datasets are large; keep selection and actions visible outside the scrolling region when possible.

## Related patterns

| Need | Prefer |
| --- | --- |
| Styled nested scrolling | **Scroll Area** |
| Long in-page nav highlight | [Scrollspy](/svelte/components/scrollspy/design) |
| Full data grid scroll | [Data Grid](/svelte/components/data-grid/design) |
| Horizontal media strip | [Carousel](/svelte/components/carousel/design) |
