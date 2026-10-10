## Import

```ts
import { Pagination } from "@pisagor/vue";
```

## Examples

### Default

Move through pages with previous, next, and page controls.

:::example Default

### Page Range

Show a window of page numbers when jumping more than one step matters.

:::example PageRange

### Links

Render items as links when navigation is the primary action.

:::example Links

### Compound

Compose pagination parts when the shorthand layout is not enough.

:::example CustomComposition

### Controlled

Manage state from the parent when other UI must stay in sync with this pagination.

:::example Controlled

## Customization

### Custom recipe

Extend `paginationRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
