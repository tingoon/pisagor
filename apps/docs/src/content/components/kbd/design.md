Kbd displays keyboard shortcuts in a monospace badge so people learn which keys to press without guessing from prose alone.

Use it in tooltips, menu items, command palettes, and docs where shortcuts speed repeated work.

## Best practices

**Show platform-appropriate symbols.** Use ⌘ on macOS and Ctrl on Windows/Linux when the shortcut differs; avoid showing both everywhere.

**Keep sequences readable.** Separate chords with spaces or plus signs consistently (“⌘ K”, not “⌘K” mixed with “Ctrl+K”).

**Match what the app actually binds.** Do not document shortcuts that are inactive in the current context or plan.

**Reserve Kbd for shortcuts, not generic keys.** Narrative text can say “Enter your name”; Kbd is for “Press Enter to submit”.

**Do not overload menus with chords.** Show shortcuts on frequent actions; omit them when the list becomes unreadable.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Place ⌘ S badges beside Save in a menu when that shortcut is live.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Wrap entire sentences in Kbd styling for decoration.</figcaption>
</figure>
</div>

## Accessibility

Ensure shortcut text appears in the accessible name when the badge is visual-only decoration beside a control.

## Related patterns

| Need | Prefer |
| --- | --- |
| Shortcut badge typography | **Kbd** |
| Command discovery | [Command](/react/components/command/design) |
| Popup action lists | [Dropdown Menu](/react/components/dropdown-menu/design) |
| One-line hints | [Tooltip](/react/components/tooltip/design) |
