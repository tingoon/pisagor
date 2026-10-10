## Import

```tsx
import { Textarea } from "@pisagor/react";
```

## Examples

### Variants

Choose emphasis to match surrounding inputs.

:::example Variants

### Controlled

Manage state from the parent when other UI must stay in sync with this textarea.

:::example Controlled

### Disabled

Show that editing is unavailable.

:::example Disabled

### Invalid

Surface a validation error when the text is missing or not allowed.

:::example Invalid

### Autoresize

Grow with content instead of showing an inner scrollbar early.

:::example Autoresize

### Clearable

Allow clearing the value when an empty state is a valid reset.

:::example Clearable

## Customization

### Custom recipe

Extend `textareaRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
