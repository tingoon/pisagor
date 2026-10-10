Dropdown Menu opens a list of actions or destinations from a trigger for navigation and overflow menus. It keeps the main interface calm while remaining actions stay one click away.

Prefer Dropdown Menu for actions tied to a visible control. Prefer [Context Menu](/react/components/context-menu/design) when commands belong to an item at the pointer, not to a shared button.

## Best practices

**Label the trigger honestly.** The button should reflect the menu’s scope — Options, Account, More — not a vague icon without an accessible name.

**Order by frequency and risk.** Put common actions at the top; separate destructive items with a divider and place them last.

**Use icons to aid scanning, not replace labels.** Pair icon and text when space allows; icon-only menu rows need clear names for screen readers.

**Keep submenus shallow.** Prefer a flat list or a dialog for complex choices instead of deep nested menus that are hard to traverse with keyboard.

**Close on action.** After selecting an item, dismiss the menu and run the action unless the item opens a nested submenu.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a “More” menu on a toolbar for overflow actions that would crowd the bar.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Hide the only way to sign out or delete inside an unlabeled icon menu with no discoverability hint.</figcaption>
</figure>
</div>

## Navigation vs actions

Use menu items for navigation sparingly — prefer direct links in the UI when the destination is primary. Reserve dropdown items for secondary routes and infrequent settings.

## Related patterns

| Need | Prefer |
| --- | --- |
| Menu from a button trigger | **Dropdown Menu** |
| Menu at pointer on an item | [Context Menu](/react/components/context-menu/design) |
| Global searchable commands | [Command](/react/components/command/design) |
| Single choice without actions | [Select](/react/components/select/design) |
