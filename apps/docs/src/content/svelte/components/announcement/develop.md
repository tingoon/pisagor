## Import

```ts
import { Announcement } from "@pisagor/svelte";
```

## Examples

### Variants

Choose emphasis so the announcement matches how urgent or promotional the message is.

:::example Variants

### With Icon

Add an icon when a symbol helps users recognize the announcement type quickly.

:::example WithIcon

### Without Badge

Drop the badge treatment when a plain text callout is enough.

:::example WithoutBadge

### Compound

Assemble parts when you need a custom announcement layout.

:::example Compound

### As child

Link through to details when the bar should stay short and the full story lives elsewhere.

:::example WithLink

## Customization

### Custom recipe

Extend `announcementRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
