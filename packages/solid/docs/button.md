## Import

```tsx
import { Button } from "@pisagor/solid";
```

## Examples

### Default

The filled button for the main action in a view.

:::example Default

### Sizes

Match size to the surrounding layout — smaller in compact toolbars, larger for prominent calls to action. Icon sizes keep square hit targets aligned with text buttons.

:::example Sizes

### Variants

Choose weight by importance: default for the primary action, secondary or outline for alternatives, destructive for irreversible work, ghost for low-emphasis chrome, and link when the control should read like inline text.

:::example Variants

### Custom color

Override the fill when a brand or contextual color matters more than the theme primary. Keep contrast readable and keep hover and focus styles consistent.

:::example CustomColor

### Pill

Use a fully rounded shape for chip-like or toolbar actions where softer geometry fits the layout.

:::example Pill

### No click effect

Turn off the press scale when motion would distract or conflict with surrounding interaction feedback.

:::example NoClickEffect

### Icon

An icon-only button for a single, well-known action. Always provide an accessible name.

:::example Icon

### As child

Render the button look on a child element (for example a link) when the control should navigate instead of run an in-page action.

:::example AsChild

### Disabled

Show that an action is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Loading

Keep the control visible while work is in progress and block another press until it finishes.

:::example Loading

### With icon

Pair an icon with a label to reinforce meaning. Prefer a leading icon for the action; use a trailing icon when the control opens another place.

:::example WithIcon
