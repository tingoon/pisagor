An action bar surfaces bulk actions when people select one or more items. It keeps primary toolbar chrome uncluttered until selection drives the next step — then presents the commands that apply to the selected set.

Use an action bar for selection-driven workflows (tables, grids, file lists). Prefer a [Toolbar](/solid/components/toolbar/design) for section-level actions that remain available without selection.

## Best practices

**Reveal the bar with selection.** Show the action bar when selection becomes active, and hide or dismiss it when selection clears so the layout returns to its resting state.

**Prioritize frequent bulk actions.** Put the commands people use most on the bar. Move secondary actions into a menu so the bar stays scannable on every viewport.

**Make scope obvious.** Show a selection count (or equivalent) so people know how many items an action will affect before they commit.

**Keep destructive actions distinct.** Separate Delete and similar actions visually from routine edits. Confirm irreversible work in a dialog before applying it to the selection.

**Place the bar near the content it acts on.** Prefer a placement that stays close to the selection surface without covering critical content or competing with app chrome.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<img alt="Selected rows with a floating action bar that shows a count and a short set of actions" src="/images/guidelines/action-bar/selection-do.svg" width="360" height="220" />
<figcaption><strong>Do</strong> Show the bar only when selection is active, and include a clear selection count.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<img alt="A crowded permanent toolbar above an unselected list" src="/images/guidelines/action-bar/selection-dont.svg" width="360" height="220" />
<figcaption><strong>Don’t</strong> Keep bulk actions permanently visible when nothing is selected.</figcaption>
</figure>
</div>

## Actions

Provide actions that support the main bulk tasks people perform on the selected set. Prefer short labels and recognizable icons. On narrow viewports, icon-only controls with accessible names are fine when space is tight.

Choose items deliberately to avoid overcrowding. People need to distinguish and activate each control. As a starting point, keep three to five primary actions on the bar and park the rest in a menu.

Make the meaning of each control clear. Don’t make people guess what a bulk action does — pair icons with labels whenever space allows, and use a dialog when the next step needs confirmation or extra input.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<img alt="Compact action bar with a selection count, two primary actions, and a More menu" src="/images/guidelines/action-bar/priority-do.svg" width="360" height="220" />
<figcaption><strong>Do</strong> Prioritize a short set of common actions and move the rest into a menu.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<img alt="Overloaded action bar packed with many similar action chips" src="/images/guidelines/action-bar/priority-dont.svg" width="360" height="220" />
<figcaption><strong>Don’t</strong> Pack every possible bulk command into the bar.</figcaption>
</figure>
</div>

## Placement

Anchor the action bar to the selection context — typically above, below, or floating over the list or table it acts on. Keep groupings consistent across screens so people can predict where Edit, Export, and Delete live.

Avoid covering critical content or overlapping sticky app chrome. When the viewport is narrow, prefer a bottom placement with enough safe-area padding, and collapse labels before collapsing reachability.

## Dismissal

Dismiss or hide the bar when selection clears. Offer an explicit close control when clearing selection is not the only exit, and support Escape when the bar can take focus.

When a bulk action opens a dialog or sheet, keep the selection (and bar) until the task completes or is canceled, then return the layout to its resting state.

## Related patterns

| Need | Prefer |
| --- | --- |
| Bulk actions for a selection | **Action Bar** |
| Persistent section-level controls | [Toolbar](/solid/components/toolbar/design) |
| Tight group of related toggles or buttons | [Button Group](/solid/components/button-group/design) |
| Grid-scoped table chrome | Data Grid / Data Table toolbar |
