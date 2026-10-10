## Import

```tsx
import { Command } from "@pisagor/solid";
```

## Anatomy

```tsx
<Command>
  <Command.Input />
  <Command.Content>
    <Command.Empty />
    <Command.List>
      <Command.ItemGroup>
        <Command.Item>
          <Command.Shortcut />
        </Command.Item>
        <Command.Separator />
      </Command.ItemGroup>
    </Command.List>
  </Command.Content>
</Command>
```

## Examples

### Default

Open a searchable palette for actions, pages, or settings.

:::example Default

### Groups

Group commands under labels so long palettes stay scannable.

:::example Groups

### Shortcuts

Show keyboard shortcuts beside commands for faster recall.

:::example Shortcuts

### With Footer

Add a footer for hints or secondary actions under the command list.

:::example WithFooter

### Scrollable

Allow the command list to scroll when items exceed the panel height.

:::example Scrollable

### With Dialog

Host the palette in a dialog when it should take focus as a modal layer.

:::example WithDialog

## Customization

### Custom recipe

Extend `commandRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
