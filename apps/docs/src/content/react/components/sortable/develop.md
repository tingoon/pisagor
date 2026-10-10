## Import

```tsx
import { Sortable } from "@pisagor/react";
```

## Anatomy

```tsx
<Sortable>
  <Sortable.Item>
    <Sortable.ItemContent>
      <Sortable.Handle />
    </Sortable.ItemContent>
  </Sortable.Item>
</Sortable>
```

## Examples

### Default

Reorder items by drag or keyboard.

:::example Default

### Horizontal

Use a horizontal layout when the sortable list should read left to right.

:::example Horizontal

### Without Handle

Drag from the whole row when a dedicated handle is unnecessary.

:::example WithoutHandle

### Disabled

Show that reordering is unavailable.

:::example Disabled
