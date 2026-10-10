## Import

```ts
import { Drawer } from "@pisagor/vue";
```

## Anatomy

```vue
<Drawer>
  <Drawer.Trigger />
  <Drawer.Content>
    <Drawer.ContentInner>
      <Drawer.Header />
      <Drawer.Body />
    </Drawer.ContentInner>
    <Drawer.Footer>
      <Drawer.CloseTrigger />
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>
```

## Examples

### Default

Slide a panel over the page for secondary detail or a short task.

:::example Default

### Inset

Inset the drawer from the viewport edge when a floating panel look fits better.

:::example Inset

### Drawer Content Inner

Structure inner content regions when the drawer needs a composed body.

:::example DrawerContentInner

### Snap Points

Snap to partial heights when users may peek or expand the panel.

:::example SnapPoints

### Swipe Directions

Limit swipe dismiss directions to match the drawer placement.

:::example SwipeDirections

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `drawerRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
