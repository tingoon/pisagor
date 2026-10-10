## Import

```tsx
import { BottomNavigation } from "@pisagor/solid";
```

## Anatomy

```tsx
<BottomNavigation>
  <BottomNavigation.List>
    <BottomNavigation.Item>
      <BottomNavigation.ItemIcon />
      <BottomNavigation.ItemLabel />
    </BottomNavigation.Item>
  </BottomNavigation.List>
</BottomNavigation>
```

## Examples

### Default

Fixed bottom destinations for primary mobile sections.

:::example Default

### Icon Only

Use icons alone when labels would crowd a narrow bar. Provide accessible names.

:::example IconOnly

### As child

Render destinations as links when each item navigates to a route.

:::example WithLinks

## Customization

### Custom recipe

Extend `bottomNavigationRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
