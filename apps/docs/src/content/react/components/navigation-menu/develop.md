## Import

```tsx
import { NavigationMenu } from "@pisagor/react";
```

## Anatomy

```tsx
<NavigationMenu>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link />
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger />
      <NavigationMenu.Content>
        <li>
          <NavigationMenu.Link />
        </li>
      </NavigationMenu.Content>
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

### Submenu

Group links under a `NavigationMenu.Trigger` (disclosure button) and `NavigationMenu.Content`. Only one submenu is open at a time.

:::example Submenu

## Customization

### Custom recipe

Extend `navigationMenuRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe

## Accessibility

Follows the WAI-ARIA disclosure navigation pattern. Triggers are buttons with `aria-expanded`/`aria-controls`. Left/Right (mirrored in RTL), Home and End move between top-level items; Down/Up on a trigger opens it and focuses the first/last link; Up/Down move inside an open submenu; Escape closes it and returns focus to the trigger; moving focus out of the item closes it.
