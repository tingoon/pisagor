## Import

```ts
import { Editable } from "@pisagor/svelte";
```

## Anatomy

```tsx
<Editable>
  <Editable.Area>
    <Editable.Input />
    <Editable.Preview />
  </Editable.Area>
  <Editable.Control>
    <Editable.CancelTrigger />
    <Editable.SubmitTrigger />
  </Editable.Control>
</Editable>
```

## Examples

### Default

Click to edit a value inline where it already appears.

:::example Default

### Variants

Choose field emphasis for the inline editor.

:::example Variants

### Sizes

Match control size to surrounding text density.

:::example Sizes

### Orientation Horizontal

Lay out the editable horizontally when items should read in a row.

:::example OrientationHorizontal

### Orientation Vertical

Stack the editable vertically when items should read in a column.

:::example OrientationVertical

### Without Controls

Hide explicit save/cancel when commit-on-blur is enough.

:::example WithoutControls

### With Textarea

Edit multi-line values inline.

:::example WithTextarea

### Controlled

Drive value and edit state from the parent.

:::example Controlled

### Disabled

Show that editing is unavailable.

:::example Disabled

### Invalid

Surface validation when the edited value is not allowed.

:::example Invalid

### Dblclick

Require double-click to edit when accidental single clicks are common.

:::example Dblclick

### Activation Click

Begin editing on single click.

:::example ActivationClick

### Activation Focus

Begin editing when the value receives focus.

:::example ActivationFocus

### Activation None

Start editing only from an explicit programmatic trigger.

:::example ActivationNone

## Customization

### Custom recipe

Extend `editableRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
