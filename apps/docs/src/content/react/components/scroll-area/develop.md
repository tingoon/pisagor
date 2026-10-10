## Import

```tsx
import { ScrollArea } from "@pisagor/react";
```

## Examples

### Default

Scroll overflow content with styled scrollbars.

:::example Default

### Horizontal

Use a horizontal layout when the scroll area should read left to right.

:::example Horizontal

### Both Directions

Allow scrolling both horizontally and vertically when content overflows in two axes.

:::example BothDirections

### Nested

Nest another scroll area when hierarchy or layered structure is part of the content.

:::example Nested

### Scroll Fade

Fade edges to hint that more content exists beyond the viewport.

:::example ScrollFade

## Customization

### Custom recipe

Extend `scrollAreaRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
