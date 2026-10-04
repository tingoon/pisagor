## Usage

**Recommended:** the single `Tooltip` export. There is no part composition API.

```tsx
<Tooltip content="Bold">
  <Button aria-label="Bold" size="icon-md" variant="outline">
    <TextBIcon />
  </Button>
</Tooltip>
```

- Pass label content with `content`.
- Style with `className` / `classNames` and sub-element bags (`contentProps`, …) — do not compose private parts.
- Icon-only triggers need an accessible name (`aria-label` or visible text).

## Import

```tsx
import { Tooltip } from "@pisagor/react";
```

## Examples

### Default

Explain a control briefly on hover or focus.

:::example Default

### With Keyboard Shortcut

Include the shortcut in the tooltip when keys reinforce the action.

:::example WithKeyboardShortcut

### Placements

Place the tooltip so it stays near the trigger without covering critical UI.

:::example Placements

### Disabled

Show that the tooltip is unavailable. Prefer explaining why nearby rather than relying on the muted state alone.

:::example Disabled

## Accessibility

Complies with the [Tooltip WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) (via Ark UI).

| Key | Description |
| --- | ----------- |
| Tab | Opens or closes the tooltip without delay when focus moves to or from the trigger. |
| Escape | If open, closes the tooltip without delay. |
