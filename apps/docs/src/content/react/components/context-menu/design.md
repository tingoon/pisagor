Context Menu opens a menu of actions at the pointer so people can act on an item in its surrounding context. It matches platform expectations for secondary commands on right-click or long-press.

Prefer Context Menu for item-scoped actions on lists, cards, and canvas elements. Prefer [Dropdown Menu](/react/components/dropdown-menu/design) for actions tied to a visible button or menu trigger.

## Best practices

**Mirror platform conventions.** Right-click on desktop and long-press on touch should open the same logical menu without duplicating primary actions already on the row.

**Keep menus short.** Lead with the most common actions; move rare or dangerous items toward the bottom and into submenus when needed.

**Separate destructive items.** Place Delete and irreversible commands away from benign edits, with visual separation and confirmation for high-impact work.

**Do not hide sole primary actions.** If the only way to open or edit an item is the context menu, also expose that action in the main UI for discoverability.

**Support keyboard alternatives.** Provide equivalent commands elsewhere for users who cannot use pointer-specific menus.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Offer Open, Rename, and Delete on a file row via context menu plus visible row actions for key tasks.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Put the only navigation path to a detail view exclusively behind a context menu.</figcaption>
</figure>
</div>

## Touch and pointer

Position the menu within the viewport, offset from the pointer. Dismiss on outside interaction, Escape, and after an action completes unless a submenu stays open.

## Related patterns

| Need | Prefer |
| --- | --- |
| Actions at pointer on an item | **Context Menu** |
| Actions from a menu button | [Dropdown Menu](/react/components/dropdown-menu/design) |
| Bulk actions on selection | [Action Bar](/react/components/action-bar/design) |
| Global shortcuts | [Command](/react/components/command/design) |
