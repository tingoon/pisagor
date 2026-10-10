Color Picker lets people choose a color visually and fine-tune it with sliders or numeric channel inputs. It balances quick exploration with precise control for brand, theme, and annotation workflows.

Prefer Color Picker when hue and saturation matter. Prefer a plain [Input](/solid/components/input/design) for hex-only entry when a full picker would overwhelm the task.

## Best practices

**Show the current color continuously.** Preview swatches on the trigger and in the picker so changes feel direct and reversible.

**Support common formats.** Accept hex, RGB, or HSL according to your product contract, and keep displayed values in sync with the selected color.

**Offer accessible alternatives.** Provide text fields for channel values and ensure contrast-sensitive users can set colors without relying on hue alone.

**Define sensible defaults.** Open on the last used or theme default color, and clamp values to supported gamuts so invalid states are rare.

**Confirm destructive theme changes.** When a color affects shared branding or other users, preview impact and offer Cancel before applying.

<div class="docs-do-dont">
<figure class="docs-do-dont-card docs-do-dont-do">
<figcaption><strong>Do</strong> Pair the swatch trigger with numeric inputs for people who need exact values.</figcaption>
</figure>
<figure class="docs-do-dont-card docs-do-dont-dont">
<figcaption><strong>Don’t</strong> Use a full picker for a binary accent toggle that only needs two preset colors.</figcaption>
</figure>
</div>

## Placement

Anchor the picker near the control it affects — inline in a form field or in a popover tied to the swatch. Keep the popover within the viewport and dismissible with Escape.

## Related patterns

| Need | Prefer |
| --- | --- |
| Visual color selection + fine tuning | **Color Picker** |
| Hex string in a form | [Field](/solid/components/field/design) + Input |
| Popover-hosted picker | Color Picker in [Popover](/solid/components/popover/design) |
| Theme token selection | Design tokens + constrained presets |
