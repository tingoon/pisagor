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

## Examples

### Default

Anchor lightweight content to a trigger without a full dialog.

:::example Default

### Close Button

Add an explicit close control when dismiss should be obvious.

:::example CloseButton

### Modal

Block interaction outside when the popover content needs focus.

:::example Modal

### Anchor

Position against a custom anchor when the trigger element is not the visual anchor.

:::example Anchor

### Nested

Nest another popover when hierarchy or layered structure is part of the content.

:::example Nested

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior

### Placements

Choose placement so the popover stays near its trigger without covering critical content.

:::example Placements

### Scroll Area

Constrain tall content in a scroll region so the popover chrome stays on screen.

:::example ScrollArea

### Custom Spacing

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

## Accessibility

Keyboard and focus behavior follow [Ark UI Popover](https://ark-ui.com/docs/components/popover#accessibility).

| Key | Description |
| --- | ----------- |
| Space | Opens or closes the popover. |
| Enter | Opens or closes the popover. |
| Tab | Moves focus to the next focusable element in the content. If none, moves to the next focusable after the trigger. |
| Shift + Tab | Moves focus to the previous focusable element in the content. If none, moves to the trigger. |
| Escape | Closes the popover and restores focus to the trigger. |

When `modal` is true, focus is trapped, outside pointer interaction is disabled, scrolling is blocked, and content behind the popover is hidden from assistive technologies.
