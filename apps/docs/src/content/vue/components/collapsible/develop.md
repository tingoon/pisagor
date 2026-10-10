## Import

```ts
import { Collapsible } from "@pisagor/vue";
```

## Anatomy

```vue
<Collapsible>
  <Collapsible.Trigger>
    <Collapsible.Indicator />
  </Collapsible.Trigger>
  <Collapsible.Content />
</Collapsible>
```

## Examples

### Default

Reveal and hide a section behind a trigger.

:::example Default

### Partial Collapse

Leave a preview visible when users should sense content below the fold.

:::example PartialCollapse

### Nested

Nest collapsibles when content has deeper hierarchy.

:::example Nested

### Controlled

Drive open state from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the section cannot expand.

:::example Disabled

## Customization

### Custom recipe

Extend `collapsibleRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
