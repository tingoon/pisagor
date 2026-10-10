## Import

```ts
import { Tooltip } from "@pisagor/svelte";
```

## Examples

### Default

Explain a control briefly on hover or focus.

:::example Default

### With Keyboard Shortcut

Include the shortcut in the tooltip when keys reinforce the action.

:::example WithKeyboardShortcut

### Disabled

Show that the tooltip is unavailable.

:::example Disabled

### Placements

Place the tooltip so it stays near the trigger without covering critical UI.

:::example Placements

## Customization

### Custom recipe

Extend `tooltipRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe

## Accessibility

Complies with the [Tooltip WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) (via Ark UI).

| Key | Description |
| --- | ----------- |
| Tab | Opens or closes the tooltip without delay when focus moves to or from the trigger. |
| Escape | If open, closes the tooltip without delay. |

Icon-only triggers need an accessible name (`aria-label` or visible text).
