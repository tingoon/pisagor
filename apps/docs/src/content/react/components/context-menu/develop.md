## Import

```tsx
import { ContextMenu } from "@pisagor/react";
```

## Anatomy

```tsx
<ContextMenu>
  <ContextMenu.ContextTrigger />
  <ContextMenu.Content>
    <ContextMenu.ItemGroup>
      <ContextMenu.Item>
        <ContextMenu.Shortcut />
      </ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Sub>
        <ContextMenu.TriggerItem />
        <ContextMenu.SubContent />
      </ContextMenu.Sub>
    </ContextMenu.ItemGroup>
  </ContextMenu.Content>
</ContextMenu>
```

## Examples

### Default

Open actions at the pointer for the item under the cursor or focus.

:::example Default
