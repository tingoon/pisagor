## Import

```ts
import { Rating } from "@pisagor/svelte";
```

## Examples

### Default

Let users pick a score from one to five stars.

:::example Default

### Count

Set `count` to change how many stars are shown.

:::example Count

### Half Star

Allow half values when finer granularity matters.

:::example HalfStar

### Custom Icon

Replace stars with another symbol when the metaphor fits better.

:::example CustomIcon

### Testimonial

Present a readonly score in a testimonial-style layout.

:::example Testimonial

### Controlled

Manage state from the parent when other UI must stay in sync with this rating.

:::example Controlled

### Disabled

Show that the rating is unavailable.

:::example Disabled

### Invalid

Surface a validation or error state so users know the rating needs attention before continuing.

:::example Invalid

### Readonly

Display the value without allowing edits when the score or data is informational only.

:::example Readonly

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Override the fill or accent when a brand or contextual color matters more than the theme default.

:::example CustomColor

Override dimensions when the default size does not fit the layout.

:::example CustomSize

### Custom recipe

Extend `ratingRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
