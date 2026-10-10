## Import

```tsx
import { Dialog } from "@pisagor/react";
```

## Examples

### Default

The centered modal for a short task or decision above the page.

:::example Default

### Scroll Area

Constrain tall content in a scroll region so the dialog chrome stays on screen.

:::example ScrollArea

### No Close Button

Hide the close button when dismiss should go through an explicit action instead.

:::example NoCloseButton

### Nested

Nest another dialog when hierarchy or layered structure is part of the content.

:::example Nested

### Compound

Build the dialog from parts when the shorthand props are not enough.

:::example Compound

### Non Modal

Keep the page behind interactive when the dialog should not trap the entire experience.

:::example NonModal

### Initial Focus

Move focus to a specific control when the dialog opens so keyboard users land in the right place.

:::example InitialFocus

### Close Behavior

Control how dismiss works — outside click, escape, or explicit close — to match the flow.

:::example CloseBehavior

## Customization

### Class names

Pass `className` for a one-off change to a single element.

Override spacing when the default density does not match the surrounding layout.

:::example CustomSpacing

### Custom recipe

Extend `dialogRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
