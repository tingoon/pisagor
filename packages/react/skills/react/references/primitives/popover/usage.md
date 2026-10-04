## Usage

**Recommended:** compose with the root and parts. The default export is the root (`<Popover>`).

```tsx
<Popover>
  <Popover.Trigger asChild>
    <Button variant="outline">Open</Button>
  </Popover.Trigger>
  <Popover.Content>
    <Popover.Header title="Dimensions" description="Set the dimensions for the layer." />
    <Popover.Body>…</Popover.Body>
  </Popover.Content>
</Popover>
```

- There is no single-prop shorthand for the full tree.
- Prefer `Popover.Header` `title` / `description` presets when enough; use `Popover.Title` / `Popover.Description` for custom markup.
- Use `showCloseButton` on `Popover.Content` when dismiss should be obvious.

## Import

```tsx
import { Popover } from "@pisagor/react";
```

## Anatomy

```tsx
<Popover>
  <Popover.Trigger />
  <Popover.Anchor />
  <Popover.Content>
    <Popover.Header /> {/* or Title + Description */}
    <Popover.Body />
    <Popover.Footer />
    <Popover.CloseTrigger />
  </Popover.Content>
</Popover>
```

`Positioner` and `Arrow` are available when you need custom positioning chrome.
