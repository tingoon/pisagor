Navbar is the top application bar that anchors brand, primary section links, search, and global actions. It orients people on every screen and holds the controls they expect to find without hunting.

Prefer Navbar for app chrome across authenticated product surfaces. Prefer [Navigation Menu](/svelte/components/navigation-menu/design) for marketing sites that need multi-column flyouts. Prefer [Bottom Navigation](/svelte/components/bottom-navigation/design) on phones when thumb reach matters more than a dense top bar. Prefer [Menu](/svelte/components/menu/design) for a persistent vertical list in a sidebar rather than horizontal top links.

## Best practices

**Keep primary destinations visible.** Show the sections people use daily; move rare links to [Dropdown Menu](/svelte/components/dropdown-menu/design) overflow.

**Reserve one prominent global action.** Search, Create, or Account should have a stable slot so muscle memory builds.

**Use translucent materials thoughtfully.** Let content scroll beneath a blurred bar when appropriate; solidify background when contrast drops.

**Collapse gracefully on narrow widths.** Hide labels into icons or a drawer before truncating the product name beyond recognition.

**Indicate where you are.** Style the active section link to match [Menu](/svelte/components/menu/design) active states elsewhere.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show logo, three section links, search, and account on a calm top bar with a clear current page.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Pack twelve top-level links in the navbar when most belong in sidebar Menu or settings.</figcaption>
</figure>
</div>

## Mobile

When the navbar competes with thumb reach, pair a slim top bar (title + back) with [Bottom Navigation](/svelte/components/bottom-navigation/design) for primary tabs.

## Related patterns

| Need | Prefer |
| --- | --- |
| Top app bar | **Navbar** |
| Vertical persistent links | [Menu](/svelte/components/menu/design) |
| Marketing mega-nav | [Navigation Menu](/svelte/components/navigation-menu/design) |
| Mobile primary tabs | [Bottom Navigation](/svelte/components/bottom-navigation/design) |
| Popup overflow | [Dropdown Menu](/svelte/components/dropdown-menu/design) |
