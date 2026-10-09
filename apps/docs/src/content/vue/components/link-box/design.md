Link Box makes an entire card or tile navigate to a destination while preserving usable nested buttons and links. It solves the common tension between “big tap target” and “secondary action on the row”.

Prefer Link Box for list tiles and media cards; use [Item](/vue/components/item/design) when the row is primarily a menu entry or listbox option without whole-row navigation.

## Best practices

**One primary destination per box.** The overlay link should go to the obvious place—detail view, article, or profile—not compete with multiple routes.

**Keep nested controls truly independent.** Favorite, Share, and overflow menus must receive clicks without triggering navigation; stop propagation deliberately and test with keyboard.

**Show interactive affordance.** Hover, focus, and cursor states on the box should signal clickability without mimicking a filled button.

**Do not nest another full Link Box inside.** One navigational surface per tile; inner elements are buttons or text links.

**Write descriptive link text for assistive tech.** Provide an accessible name for the overlay (“Open report: Q3 summary”) even when the visual layout is visual-only.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Let the card open the project while a trailing menu handles Archive and Share.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Wrap a card in a link and also place primary buttons that fight the same click target.</figcaption>
</figure>
</div>

## Layout

Match padding and radius to neighboring [Card](/vue/components/card/design) components. Entire-row hit areas should still leave room for nested controls on touch devices.

## Related patterns

| Need | Prefer |
| --- | --- |
| Clickable tile with nested actions | **Link Box** |
| Row layout without overlay link | [Item](/vue/components/item/design) |
| Static grouped content | [Card](/vue/components/card/design) |
| Breadcrumb trail | [Breadcrumb](/vue/components/breadcrumb/design) |
