## Import

```ts
import { Button } from "@pisagor/astro";
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

### Disabled

Show that an action is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

### Loading

Keep the control visible while work is in progress and block another press until it finishes.

:::example Loading

### Pill

Use a fully rounded shape for chip-like or toolbar actions where softer geometry fits the layout.

:::example Pill

### Icon

An icon-only button for a single, well-known action. Always provide an accessible name.

:::example Icon

### With icon

Pair an icon with a label to reinforce meaning. Prefer a leading icon for the action; use a trailing icon when the control opens another place.

:::example WithIcon

### No click effect

Turn off the press scale when motion would distract or conflict with surrounding interaction feedback.

:::example NoClickEffect
