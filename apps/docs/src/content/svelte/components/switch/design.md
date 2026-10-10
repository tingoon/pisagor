A switch toggles a single setting on or off with immediate effect and clear visual feedback — the track and thumb communicate state at a glance, like system settings on Apple platforms.

Prefer Switch when turning something on or off takes effect right away; prefer [Checkbox](/svelte/components/checkbox/design) when the choice is part of a form submitted later. Prefer [Toggle](/svelte/components/toggle/design) when the control should look like a pressed button in a toolbar.

## Best practices

**Label with the on state.** Write “Wi‑Fi” or “Notifications,” not “Enable Wi‑Fi?” — the switch position already implies on/off.

**Apply changes immediately.** When off, stop the behavior; when on, start it — or show inline progress if the backend lags.

**Place labels beside the switch.** Align label and control so the hit target and reading order are obvious on all screen sizes.

**Do not use switches for irreversible actions.** Destructive work belongs on [Button](/svelte/components/button/design) with confirmation, not a casual flip.

**Group related switches.** Stack settings that belong to one feature with consistent spacing and section headings.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Use a switch for a single binary preference that updates as soon as it is flipped.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a switch for “I agree to terms” on submit — that is a [Checkbox](/svelte/components/checkbox/design) in a form.</figcaption>
</figure>
</div>

## Forms and defaults

When a switch sits in a form that still has Save, either auto-save on toggle or make clear that other fields need submit — avoid mixed mental models on one screen.

## Related patterns

| Need | Prefer |
| --- | --- |
| Immediate on/off setting | **Switch** |
| Choice saved with form submit | [Checkbox](/svelte/components/checkbox/design) |
| Toolbar pressed state | [Toggle](/svelte/components/toggle/design) |
| Continuous value | [Slider](/svelte/components/slider/design) |
