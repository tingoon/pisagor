## Import

```ts
import { Carousel } from "@pisagor/svelte";
```

## Examples

### Default

Step through slides with previous and next controls.

:::example Default

### Orientation Horizontal

Scroll slides left to right for the common carousel pattern.

:::example OrientationHorizontal

### Orientation Vertical

Scroll slides top to bottom when vertical paging fits the layout.

:::example OrientationVertical

### Spacing

Adjust gaps between slides to match density.

:::example Spacing

### Slides Per Page

Show more than one slide at a time when comparison matters.

:::example SlidesPerPage

### Thumbnail Indicator

Use thumbnails so users can jump to a specific slide.

:::example ThumbnailIndicator

### Thumbnail Indicator Vertical

Stack thumbnails vertically beside the main slide.

:::example ThumbnailIndicatorVertical

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### Controlled

Drive the active slide from the parent when other UI depends on it.

:::example Controlled

### Autoplay

Advance slides automatically when the carousel is ambient, not critical reading.

:::example Autoplay

### Loop

Wrap from last to first when continuous browsing should not stop at the end.

:::example Loop

### Mouse Drag

Let users drag slides when pointer gestures feel more direct than buttons alone.

:::example MouseDrag

## Customization

### Custom recipe

Extend `carouselRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
