## Import

```ts
import { CircularSlider } from "@pisagor/svelte";
```

## Examples

### Default

Choose a value by dragging around a circular track.

:::example Default

### Sizes

Match control size to the surrounding layout.

:::example Sizes

### Thickness

Adjust track thickness for visibility and touch comfort.

:::example Thickness

### With Value

Show the current value so the gesture stays understandable.

:::example WithValue

### With Markers

Show markers for key values along the circular track.

:::example WithMarkers

### Custom Markers

Place custom markers when meaningful points sit on the ring.

:::example CustomMarkers

### Controlled

Drive the value from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the control is unavailable.

:::example Disabled

### Step

Snap to increments when values should move in fixed steps.

:::example Step

## Customization

### Custom recipe

Extend `circularSliderRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
