## Import

```ts
import { DatePicker } from "@pisagor/svelte";
```

## Anatomy

```tsx
<DatePicker>
  <DatePicker.Trigger>
    <DatePicker.ValueText />
  </DatePicker.Trigger>
  <DatePicker.Content />
</DatePicker>
```

## Examples

### Default

Pick a date from a calendar attached to a field or popover.

:::example Default

### Variants

Choose field emphasis to match surrounding inputs.

:::example Variants

### Range

Pick a start and end date for spans.

:::example Range

### Time

Include time when the value is a datetime rather than a day alone.

:::example Time

### Input

Type the date in an input when keyboard entry is faster than picking.

:::example Input

### With Presets

Offer common ranges so users can pick without hunting on the calendar.

:::example WithPresets

### Custom Format

Override display format when locale or product needs a specific pattern.

:::example CustomFormat

### Clearable

Offer a clear control when the date is optional.

:::example Clearable

### Disabled

Show that the date cannot change.

:::example Disabled

### Invalid

Surface a validation or error state so users know the date picker needs attention before continuing.

:::example Invalid

## Customization

### Custom recipe

Extend `datePickerRecipe` with `tv({ extend })` and pass it to `recipe` when the look should be reusable across the app.

:::example CustomRecipe
