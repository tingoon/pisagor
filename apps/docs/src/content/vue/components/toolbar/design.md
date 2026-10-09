Toolbar organizes local section chrome: typically a heading on one side and related actions on the other. It keeps context and tools together for a page region, list, or detail view without claiming app-wide navigation.

Prefer Toolbar for persistent section-level actions that do not depend on selection; prefer [Action Bar](/vue/components/action-bar/design) when bulk commands appear only after selecting items. Prefer [Navbar](/vue/components/navbar/design) for global app navigation and branding.

## Best practices

**Lead with context.** The section title or breadcrumb should tell people where they are; actions support that place, not compete with it.

**Prioritize primary actions.** Show the one or two commands people use most; tuck the rest in [Dropdown Menu](/vue/components/dropdown-menu/design) or overflow.

**Wrap or collapse on narrow widths.** Actions should remain reachable — icon-only with accessible names is acceptable when labels no longer fit.

**Separate destructive work.** Delete and irreversible commands should look distinct and often live last or in a menu with confirmation.

**Do not duplicate global nav.** Toolbar actions affect the local section; app-wide items belong in the navbar or app shell.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair “Invoices” with Add and Export that apply to that list.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Show bulk Delete in the toolbar when nothing is selected — use [Action Bar](/vue/components/action-bar/design) for selection-driven bulk work.</figcaption>
</figure>
</div>

## Composition

Use [Button Group](/vue/components/button-group/design) for tightly related actions and [Toggle Group](/vue/components/toggle-group/design) for view modes within the same toolbar row.

## Related patterns

| Need | Prefer |
| --- | --- |
| Section title + local actions | **Toolbar** |
| Bulk actions after selection | [Action Bar](/vue/components/action-bar/design) |
| App-wide navigation | [Navbar](/vue/components/navbar/design) |
| Related buttons only | [Button Group](/vue/components/button-group/design) |
