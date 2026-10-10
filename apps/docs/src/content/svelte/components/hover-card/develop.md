## Import

```ts
import { HoverCard } from "@pisagor/svelte";
```

## Anatomy

```tsx
<HoverCard>
  <HoverCard.Trigger />
  <HoverCard.Content />
</HoverCard>
```

## Examples

### Default

Preview richer content on hover or focus without a dialog.

:::example Default

### Controlled

Manage state from the parent when other UI must stay in sync with this hover card.

:::example Controlled

### Disabled

Show that the hover card is unavailable.

:::example Disabled

### Triggers Delays

Tune open and close delays so accidental passes do not flash content.

:::example TriggersDelays

### Placements

Choose placement so the hover card stays near its trigger without covering critical content.

:::example Placements

## Customization

### Custom recipe

Extend `hoverCardRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
