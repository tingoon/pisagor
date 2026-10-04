## Usage

**Recommended:** shorthand props on `Alert`.

```tsx
<Alert
  title="Icons improve context"
  description="You can add icons to alerts to provide visual context."
/>
```

**Advanced:** compose parts when you need custom order, icons, or actions.

```tsx
<Alert.Root variant="info">
  <ChecksIcon />
  <Alert.Title>Deployment successful</Alert.Title>
  <Alert.Description>…</Alert.Description>
  <Alert.Action>
    <Button size="xs">Update</Button>
  </Alert.Action>
</Alert.Root>
```

- Do not nest `Alert.Title` / `Alert.Description` under shorthand `<Alert>`.
- Do not pass `children` to shorthand for layout — use `Alert.Root` instead.

## Import

```tsx
import { Alert } from "@pisagor/react";
```

## Anatomy

```tsx
// Shorthand
<Alert title="…" description="…" action={…} icon={…} />

// Composition
<Alert.Root>
  <Alert.Title />
  <Alert.Description />
  <Alert.Action />
</Alert.Root>
```

## Examples

### Default

The standard in-page alert for status messages that stay in context.

:::example Default

### Variants

Choose info, success, warning, or error to match the severity of the message.

:::example Variants

### With Icon

Reinforce meaning with an icon that matches the alert status.

:::example WithIcon

### With Action

Add a follow-up action when the message should lead somewhere, such as Undo or View details.

:::example WithAction

### Custom Color

Override accent when a brand or contextual color matters more than the status token. Keep contrast readable.

:::example CustomColor

### Composition

Compose title, description, and actions from parts for a custom alert layout.

:::example Compound

## Accessibility

Alert is an in-flow status surface (not a modal). Keep the message readable without relying on color alone — pair `variant` with clear title or description copy. Decorative icons should not be the only cue; actionable controls inside `action` / `Alert.Action` need visible labels.
