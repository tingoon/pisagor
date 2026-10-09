Resizable splits space between panels with draggable handles so people can adjust layout proportions — side-by-side editors, preview panes, or dashboards that need flexible width or height.

Use Resizable when persistent layout control adds value; avoid it when a fixed layout is simpler or when mobile users cannot meaningfully drag dividers.

## Best practices

**Provide a visible, reachable handle.** Hit targets should meet minimum size; show focus rings when the handle is keyboard focused.

**Persist reasonable defaults.** Remember panel sizes across sessions when appropriate, but reset gracefully on small viewports.

**Set minimum and maximum bounds.** Prevent panels from collapsing to zero or swallowing the entire view unless collapse is intentional.

**Offer collapse affordances when needed.** Pair handles with explicit collapse buttons for people who do not discover drag.

**Respect reduced motion.** Size changes can be instant; avoid gratuitous animation on every drag frame.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use resizable splits for editor + preview or list + detail where people work in both panes daily.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Add draggable dividers on simple marketing pages where a single column reads better on every device.</figcaption>
</figure>
</div>

## Responsive behavior

On narrow screens, prefer stacking panels or [Sheet](/solid/components/sheet/design) for secondary content instead of horizontal splits that leave each pane too thin.

## Related patterns

| Need | Prefer |
| --- | --- |
| Adjustable split panels | **Resizable** |
| Edge panel overlay | [Sheet](/solid/components/sheet/design) / [Drawer](/solid/components/drawer/design) |
| App regions with nav | [Sidebar](/solid/components/sidebar/design) |
| Tabbed alternate views | [Tabs](/solid/components/tabs/design) |
