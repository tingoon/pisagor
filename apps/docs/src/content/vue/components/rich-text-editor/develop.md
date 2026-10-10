## Import

```ts
import { RichTextEditor } from "@pisagor/vue/rich-text-editor";
```

## Examples

### Default

Render the editor with a toolbar and starting content.

:::example Default

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Drive editor value from the parent when form state lives above.

:::example Controlled

### Disabled

Show that editing is unavailable.

:::example Disabled

### Invalid

Surface a validation error when content is missing or not allowed.

:::example Invalid

## Customization

### Custom recipe

Extend `richTextEditorRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
