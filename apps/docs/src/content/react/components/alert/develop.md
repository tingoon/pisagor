## Import

```tsx
import { Alert } from "@pisagor/react";
```

## Examples

### Variants

Choose info, success, warning, or error to match the severity of the message.

:::example Variants

### With Icon

Reinforce meaning with an icon that matches the alert status.

:::example WithIcon

### With Action

Add a follow-up action when the message should lead somewhere, such as Undo or View details.

:::example WithAction

### Compound

Compose title, description, and actions from parts for a custom alert layout.

:::example Compound

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override accent when a brand or contextual color matters more than the status token.

:::example CustomColor

### Custom recipe

Extend `alertRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe

## Accessibility

Alert is an in-flow status surface (not a modal). Keep the message readable without relying on color alone — pair `variant` with clear title or description copy. Decorative icons should not be the only cue; actionable controls inside `action` / `Alert.Action` need visible labels.
