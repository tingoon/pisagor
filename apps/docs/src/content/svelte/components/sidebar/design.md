Sidebar provides persistent application navigation — sections, projects, settings — with collapsible width and keyboard shortcuts. On compact viewports it often defers to a [Sheet](/svelte/components/sheet/design) so content stays full width.

Prefer Sidebar for multi-area apps where people switch destinations frequently; prefer [Navbar](/svelte/components/navbar/design) for top-level marketing or simple horizontal nav. Do not duplicate the same links in both unless one is clearly secondary (for example, mobile sheet versus desktop rail).

## Best practices

**Reflect current location.** Active item styling, aria-current, and consistent iconography help people know where they are.

**Collapse without losing names.** Icon-only collapsed mode needs tooltips or labels on focus; expandable groups should remember open state when it helps return visits.

**Keep primary destinations visible.** Bury rarely used links in nested groups; star the paths people open daily.

**Offer keyboard access.** Document shortcuts for toggle and focus first nav item when the rail opens.

**Coordinate with main content.** Main region should reflow when the sidebar expands; avoid overlapping focus traps between rail and page.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a collapsible sidebar for app shells with many sections and a sheet fallback on small screens.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Put a full marketing sitemap in a sidebar on a landing page where a simple top navbar suffices.</figcaption>
</figure>
</div>

## Mobile

Hide the rail behind a menu control; open navigation in a sheet with the same link order as desktop for predictability.

## Related patterns

| Need | Prefer |
| --- | --- |
| Persistent app navigation rail | **Sidebar** |
| Top horizontal nav | [Navbar](/svelte/components/navbar/design) |
| Temporary mobile nav | [Sheet](/svelte/components/sheet/design) |
| Page layout regions | [App Shell](/svelte/components/app-shell/design) |
