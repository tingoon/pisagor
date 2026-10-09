Breadcrumb shows where someone is within a hierarchy and lets them jump back to earlier levels. The path itself becomes wayfinding when depth is two or more meaningful levels.

Prefer Breadcrumb when parent pages are real destinations; prefer a flat Navbar when the product is shallow. Prefer Tabs for sibling sections at the same depth, not ancestry.

## Best practices

**Start from a sensible root.** Home or the top collection should appear when it helps orientation, not when it adds noise on single-level apps.

**Make segments links when useful.** Current page is text; ancestors are tappable unless disabled for a reason.

**Collapse long paths.** Show first, last, and current with an ellipsis control for middle segments so the current title stays visible on narrow widths.

**Mirror real hierarchy.** Each crumb should match a route people can actually visit; do not invent fake intermediate labels.

**Keep separators subtle.** Chevrons or slashes should not overpower the segment text.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Truncate the middle of a deep path and keep the current page label readable.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show a breadcrumb on a flat app where every screen is a peer with no parent.</figcaption>
</figure>
</div>

## Related patterns

| Need | Prefer |
| --- | --- |
| Hierarchical back navigation | **Breadcrumb** |
| Sibling section switching | Tabs |
| Deep tree browsing | Tree View |
| Global top links | Navbar |
