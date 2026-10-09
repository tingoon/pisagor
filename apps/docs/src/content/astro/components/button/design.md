A button initiates an action or navigation. Visual weight, size, and loading state show which control matters most and whether work is in progress.

Prefer one primary button per view; use secondary, outline, or ghost styles for supporting actions. Prefer a button over plain text when the control must look tappable and report unavailable or loading state.

## Best practices

**Use verb-led labels.** Save, Continue, and Delete describe outcomes; avoid Submit alone when a specific verb is clearer.

**Establish a clear hierarchy.** One primary action per screen or dialog; demote alternatives so people are not asked to choose among equals.

**Show progress on the button.** Loading state on the committing control prevents duplicate submission and ties feedback to the action they took.

**Disable with context.** When unavailable, explain nearby why — not only a grayed control with no reason.

**Size for touch and density.** Match button scale to surrounding Input and list rows; keep minimum hit targets on mobile.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair one prominent primary action with clearly quieter secondary options.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Place two equally emphasized primary buttons side by side without a recommended path.</figcaption>
</figure>
</div>

## States

Pressed feedback should appear on pointer down, not only after release. Loading replaces or augments label content without shifting layout abruptly.

## Related patterns

| Need | Prefer |
| --- | --- |
| Single committing action | **Button** |
| Related choices in one cluster | [Button Group](/astro/components/button-group/design) |
| Row of section actions | Toolbar |
| On/off immediate setting | Switch |
