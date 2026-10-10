## Import

```ts
import { Frame } from "@pisagor/astro";
```

## Anatomy

```tsx
<Frame>
  <Frame.Header>
    <Frame.Title />
    <Frame.Description />
  </Frame.Header>
  <Frame.Panel />
  <Frame.Footer />
</Frame>
```

## Examples

### Default

Embed content inside consistent framed chrome.

:::example Default

### Separated Panels

Show multiple framed regions when the workspace splits embeds.

:::example SeparatedPanels

## Customization

### Custom recipe

Extend `frameRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
