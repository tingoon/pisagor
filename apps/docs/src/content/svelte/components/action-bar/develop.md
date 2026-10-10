## Import

```ts
import { ActionBar } from "@pisagor/svelte";
```

## Anatomy

```tsx
<ActionBar>
  <ActionBar.Trigger />
  <ActionBar.Content>
    <ActionBar.Value />
    <ActionBar.Separator />
    <ActionBar.Body />
    <ActionBar.Close />
  </ActionBar.Content>
</ActionBar>
```

## Examples

### Default

The standard bar that appears when selection enables bulk actions.

:::example Default

### Gutter

Add side gutter spacing so actions align with the content column.

:::example Gutter

### Close Trigger

Let users dismiss the bar explicitly when clearing selection is not the only exit.

:::example CloseTrigger

### With Dialog

Open a dialog from a bulk action when the next step needs confirmation or extra input.

:::example WithDialog

### With Menu

Park secondary bulk actions in a menu so the bar stays focused on common work.

:::example WithMenu

### Controlled

Manage state from the parent when other UI must stay in sync with this action bar.

:::example Controlled

### Placements

Choose placement so the action bar stays near its trigger without covering critical content.

:::example Placements

## Customization

### Class names

Pass `class` for a one-off change to a single element.

Tighten or loosen padding when the bar sits in a denser or roomier toolbar.

:::example CustomSpacing

### Custom recipe

Extend `actionBarRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
