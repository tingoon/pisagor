## Import

```ts
import { FloatingPanel } from "@pisagor/vue";
```

## Anatomy

```vue
<FloatingPanel>
  <FloatingPanel.Trigger />
  <FloatingPanel.Content>
    <FloatingPanel.Header>
      <FloatingPanel.Title />
      <FloatingPanel.Control>
        <FloatingPanel.Minimize />
        <FloatingPanel.Maximize />
        <FloatingPanel.Restore />
        <FloatingPanel.CloseTrigger />
      </FloatingPanel.Control>
    </FloatingPanel.Header>
    <FloatingPanel.Body />
    <FloatingPanel.Footer />
  </FloatingPanel.Content>
</FloatingPanel>
```

## Examples

### Default

Float a draggable, resizable tool above the workspace.

:::example Default

### Controlled Position

Drive position from the parent when layout must restore a saved place.

:::example ControlledPosition

### Controlled Size

Drive size from the parent when dimensions must restore a saved layout.

:::example ControlledSize

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `floatingPanelRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
