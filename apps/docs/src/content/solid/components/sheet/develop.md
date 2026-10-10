## Import

```tsx
import { Sheet } from "@pisagor/solid";
```

## Anatomy

```tsx
<Sheet>
  <Sheet.Trigger />
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title />
      <Sheet.Description />
    </Sheet.Header>
    <Sheet.Body />
    <Sheet.Footer>
      <Sheet.CloseTrigger />
    </Sheet.Footer>
  </Sheet.Content>
</Sheet>
```

## Examples

### Default

Slide a panel in from the edge for a secondary task.

:::example Default

### Inset

Inset the sheet from the viewport edge when a floating panel look fits better.

:::example Inset

### Sides

Choose which edge the sheet enters from to match the task and layout.

:::example Sides

### Scroll Area

Constrain tall content in a scroll region so the sheet chrome stays on screen.

:::example ScrollArea

### No Close Button

Hide the close button when dismiss should go through an explicit action instead.

:::example NoCloseButton

### Non Modal

Keep the page behind interactive when the sheet should not trap focus entirely.

:::example NonModal

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `sheetRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
