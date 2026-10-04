Menu is an always-visible list of navigation links or actions—typically in a sidebar or panel—not a popup triggered from a button.

Prefer [Dropdown Menu](/react/components/dropdown-menu/design) for overflow actions opened from a trigger. Prefer [Navigation Menu](/react/components/navigation-menu/design) for marketing-style mega-nav with flyouts. Prefer [Navbar](/react/components/navbar/design) for the top application bar that combines brand, section links, and global actions. Prefer [Bottom Navigation](/react/components/bottom-navigation/design) for three to five primary mobile destinations fixed to the screen edge.

## Best practices

**Name destinations specifically.** Use labels like “Billing” and “Team members”, not vague “Settings” buckets that hide multiple routes.

**Show current location.** Highlight the active item so people always know where they are in the hierarchy.

**Keep lists shallow.** Prefer one level of items; nest sparingly and consider [Tree View](/react/components/tree-view/design) for deep hierarchies.

**Separate navigation from destructive actions.** Put Delete account and similar items away from routine links, with confirmation when needed.

**Match density to context.** Sidebar menus can be comfortable; compact menus suit inspector panels.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show persistent section links in a sidebar with a clear active state.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use Menu for a popup “More” button— that is Dropdown Menu.</figcaption>
</figure>
</div>

## Composition

Build rows with [Item](/react/components/item/design) for consistent icon, label, and badge slots. Icons aid scanability but should not replace readable labels.

## Related patterns

| Need | Prefer |
| --- | --- |
| Persistent link or action list | **Menu** |
| Popup from a trigger | [Dropdown Menu](/react/components/dropdown-menu/design) |
| Top bar with brand + nav | [Navbar](/react/components/navbar/design) |
| Site-wide sections with flyouts | [Navigation Menu](/react/components/navigation-menu/design) |
| Mobile primary destinations | [Bottom Navigation](/react/components/bottom-navigation/design) |
