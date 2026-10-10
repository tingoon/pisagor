## Import

```tsx
import { Button } from "@pisagor/react";

<Button>Save</Button>
```

## Examples

### Variants

Choose weight by importance: default for the primary action, secondary or outline for alternatives, destructive for irreversible work, ghost for low-emphasis chrome, and link when the control should read like inline text.

:::example Variants

### Sizes

Match size to the surrounding layout — smaller in compact toolbars, larger for prominent calls to action. Icon sizes keep square hit targets aligned with text buttons.

:::example Sizes

### Pill

Use a fully rounded shape for chip-like or toolbar actions where softer geometry fits the layout.

:::example Pill

### With icon

Pair an icon with a label to reinforce meaning.

:::example WithIcon

### Icon

An icon-only button for a single, well-known action. Always provide an accessible name.

:::example Icon

### As child

Render the button look on a child element (for example a link) when the control should navigate instead of run an in-page action.

:::example AsChild

### Disabled

Show that an action is unavailable.

:::example Disabled

### Loading

Keep the control visible while work is in progress and block another press until it finishes.

:::example Loading

### No click effect

Turn off the press scale when motion would distract or conflict with surrounding interaction feedback.

:::example NoClickEffect

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override the fill when a brand or contextual color matters more than the theme primary.

:::example CustomColor

### Custom recipe

Extend `buttonRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
