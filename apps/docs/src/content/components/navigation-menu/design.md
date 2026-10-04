Navigation Menu organizes top-level site or product sections with optional flyout panels—ideal when each area has subpages worth previewing before navigation.

Prefer Navigation Menu for public marketing or docs headers with rich dropdowns. Prefer [Navbar](/react/components/navbar/design) for everyday app chrome with a simpler link row. Prefer [Menu](/react/components/menu/design) for always-expanded sidebar lists without flyouts. Prefer [Dropdown Menu](/react/components/dropdown-menu/design) for action menus tied to a button, not primary site navigation.

## Best practices

**Limit top-level items.** Five to seven sections is a practical ceiling; consolidate the rest under clear group labels inside panels.

**Write specific trigger labels.** “Product”, “Pricing”, and “Docs” beat generic “Resources” unless the panel content proves otherwise.

**Keep flyouts scannable.** Use columns, headings, and short descriptions; avoid walls of undifferentiated links.

**Open on intent, not accident.** Use hover delays and clickable triggers on touch so panels do not flash during pointer travel.

**Close predictably.** Escape, outside click, and choosing a link should dismiss the panel and move focus sensibly.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Group docs links under a Docs trigger with categorized columns and one-line descriptions.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Mirror the entire sitemap in a hover panel people cannot scan in one glance.</figcaption>
</figure>
</div>

## Motion

Panels should emerge from their trigger with matched enter and exit paths. Honor reduced motion with opacity transitions instead of large vertical slides.

## Related patterns

| Need | Prefer |
| --- | --- |
| Section nav with flyouts | **Navigation Menu** |
| App top bar | [Navbar](/react/components/navbar/design) |
| Sidebar link list | [Menu](/react/components/menu/design) |
| Action overflow on a control | [Dropdown Menu](/react/components/dropdown-menu/design) |
| Mobile thumb tabs | [Bottom Navigation](/react/components/bottom-navigation/design) |
