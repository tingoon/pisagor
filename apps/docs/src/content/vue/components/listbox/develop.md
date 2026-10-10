## Import

```ts
import { Listbox } from "@pisagor/vue";
```

## Examples

### Default

Choose from a scrollable list with clear selection.

:::example Default

### Horizontal

Use a horizontal layout when the listbox should read left to right.

:::example Horizontal

### Grid

Lay options in a grid when tiles scan better than a single column.

:::example Grid

### With Icon

Lead options with icons when symbols speed recognition.

:::example WithIcon

### With Description

Add secondary text under each option for clarity.

:::example WithDescription

### Grouped

Group options under labels for long lists.

:::example Grouping

### With Filter

Filter the list by typing when options are numerous.

:::example WithFilter

### Compound

Assemble from parts when you need a custom layout beyond the shorthand API.

:::example Compound

### With Popover

Host the listbox inside a popover trigger.

:::example WithPopover

### Transfer List

Move items between dual lists when assigning membership.

:::example TransferList

### Image Explorer

Browse image options when thumbnails carry meaning.

:::example ImageExplorer

### Controlled

Drive selection from the parent when other UI depends on it.

:::example Controlled

### Disabled

Show that the list is unavailable.

:::example Disabled

### Disabled Item

Show that a specific option cannot be selected.

:::example DisabledItem

### Selection Multiple

Allow more than one selected option.

:::example SelectionMultiple

### Selection Extended

Extend selection with modifier keys for power users.

:::example SelectionExtended

### Selection None

Support a list without a required selection.

:::example SelectionNone

## Customization

### Custom recipe

Extend `listboxRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
