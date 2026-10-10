## Import

```tsx
import { Navbar } from "@pisagor/react";
```

## Anatomy

```tsx
<Navbar>
  <Navbar.Brand />
  <Navbar.Nav />
  <Navbar.Actions />
</Navbar>
```

## Examples

### Default

Top bar with brand, navigation, and action slots.

:::example Default

### With Sidebar

Pair the navbar with a sidebar when primary nav lives on the side.

:::example WithSidebar

## Customization

### Custom recipe

Extend `navbarRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
