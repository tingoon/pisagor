## Import

```tsx
import { Menu } from "@pisagor/react";
```

## Anatomy

```tsx
<Menu>
  <Menu.List>
    <Menu.Item>
      <Menu.Shortcut />
    </Menu.Item>
    <Menu.Link />
    <Menu.Separator />
  </Menu.List>
</Menu>
```

## Examples

### Default

An always-visible list of navigation links or actions.

:::example Default

### With Groups

Group related items so long menus stay scannable.

:::example WithGroups

## Customization

### Custom recipe

Extend `menuRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
