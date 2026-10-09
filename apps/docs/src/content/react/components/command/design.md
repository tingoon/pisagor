Command offers a searchable palette for jumping to actions, pages, or settings from the keyboard. It rewards power users while staying discoverable through a clear entry point such as ⌘K or Search.

Prefer Command for global navigation and action dispatch. Prefer [Dropdown Menu](/react/components/dropdown-menu/design) for a small set of actions tied to one trigger on the page.

## Best practices

**Make the shortcut discoverable.** Show the keyboard hint in the menu bar, footer, or empty states so people learn the palette exists.

**Group results meaningfully.** Separate recent items, navigation, settings, and actions with headings so scanning stays fast as the index grows.

**Rank by relevance.** Fuzzy match on titles and keywords; surface frequent and recent choices before obscure commands.

**Keep items actionable.** Each row should lead to an immediate outcome — navigate, run, or open a subflow — not dead-end labels.

**Return focus on dismiss.** Closing the palette should restore focus to where the user invoked it, without trapping keyboard users.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Open the palette from a consistent shortcut and show grouped, searchable actions.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Replace every local menu with a global command palette when context-specific menus are clearer.</figcaption>
</figure>
</div>

## Scope

Start with high-value commands — go to…, create…, toggle theme — before indexing every minor action. Destructive commands should require confirmation or a second step inside the palette.

## Related patterns

| Need | Prefer |
| --- | --- |
| Global searchable actions | **Command** |
| Trigger-bound action list | [Dropdown Menu](/react/components/dropdown-menu/design) |
| Pointer-position actions | [Context Menu](/react/components/context-menu/design) |
| Modal task focus | [Dialog](/react/components/dialog/design) |
