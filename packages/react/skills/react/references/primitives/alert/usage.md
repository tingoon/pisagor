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

Style with `@pisagor/recipes/alert` — no app-level `tv()`.

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
