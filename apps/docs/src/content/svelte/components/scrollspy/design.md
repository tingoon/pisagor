Scrollspy highlights navigation links to show which section is currently visible while people scroll long pages — documentation, settings, or policy content with a table of contents beside the body.

Prefer Scrollspy when section anchors and a sticky nav improve orientation; prefer [Tabs](/svelte/components/tabs/design) when only one section should mount at a time. Pair with [Scroll Area](/svelte/components/scroll-area/design) when the nav list itself overflows.

## Best practices

**Align nav labels with headings.** Link text should match or abbreviate visible section titles so people connect nav to content.

**Update active state smoothly.** Highlight the section whose heading is nearest the top of the viewport; avoid flicker when headings are close together.

**Support in-page navigation.** Clicking a nav item should scroll to the target and move focus when appropriate for keyboard users.

**Respect scroll margins.** Offset targets for fixed headers so headings are not hidden under app chrome.

**Keep the nav visible.** Sticky side nav or a compact top strip works; do not let the active indicator scroll out of view on long nav lists without Scroll Area.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use scrollspy on long single-page docs with real section headings and matching anchor links.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use scrollspy on short pages where a static list of links adds noise without orientation benefit.</figcaption>
</figure>
</div>

## Mobile

Collapse the section nav into a [Select](/svelte/components/select/design) or drawer on narrow viewports if a side rail consumes too much width.

## Related patterns

| Need | Prefer |
| --- | --- |
| Highlight current scroll section | **Scrollspy** |
| Switch mounted panels | [Tabs](/svelte/components/tabs/design) |
| Nested nav scroll | [Scroll Area](/svelte/components/scroll-area/design) |
| Site-wide wayfinding | [Navigation Menu](/svelte/components/navigation-menu/design) |
