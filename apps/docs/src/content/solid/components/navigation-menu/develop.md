## Import

```tsx
import { NavigationMenu } from "@pisagor/solid";
```

## Anatomy

```tsx
<NavigationMenu>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link />
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu>
```

## Examples

### Default

Horizontal navigation across top-level sections.

:::example Default

### Wrapping

Allow items to wrap when the viewport is too narrow for a single row.

:::example Wrapping

## Customization

### Custom recipe

Extend `navigationMenuRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
