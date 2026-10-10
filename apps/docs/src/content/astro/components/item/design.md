Item lays out a row of media, title, description, and trailing actions—the building block for lists, menus, pickers, and settings screens. Consistent spacing and alignment make dense collections scannable.

Compose Items inside Listbox, Menu, or plain lists; avoid reinventing row anatomy per screen.

## Best practices

**Lead with the primary label.** Put the most important words first; secondary detail belongs in description or metadata slots.

**Align actions to the trailing edge.** Keep destructive or infrequent actions in menus so the row stays tappable for its main purpose.

**Use media with purpose.** Avatars and thumbnails help recognition; omit decorative images when they add noise.

**Support selection and navigation states.** Show selected, disabled, and focus styles that match sibling rows in the same list.

**Keep rows a comfortable height.** Touch targets should meet platform minimums; wrap description instead of shrinking type below readable sizes.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Show icon, title, subtitle, and a single chevron or menu for a settings row.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Pack five equal-weight buttons on every row when one primary action suffices.</figcaption>
</figure>
</div>

## Density

Offer compact variants for inspector panels and comfortable spacing for primary browsing lists. Do not mix densities arbitrarily within one list.

## Related patterns

| Need | Prefer |
| --- | --- |
| Standard list row layout | **Item** |
| Scrollable option selection | Listbox |
| Always-visible link list | Menu |
| Entire row navigates | [Link Box](/astro/components/link-box/design) |
