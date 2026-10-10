## Import

```ts
import { Field } from "@pisagor/vue";
```

## Anatomy

```vue
<Field>
  <Field.Label />
  {/* any form control, e.g. <Input /> */}
  <Field.Description />
  <Field.Error />
</Field>
```

## Examples

### Default

Wrap a control with label, description, and error text.

:::example Default

### Orientation Horizontal

Place the label beside the control when horizontal forms fit better.

:::example OrientationHorizontal

### Orientation Vertical

Stack the label above the control for the common form layout.

:::example OrientationVertical

### Autocomplete Field

Compose Field around Autocomplete when search-as-you-type needs label and error text.

:::example AutocompleteField

### Checkbox Field

Compose Field around Checkbox when the option needs label, description, or error text.

:::example CheckboxField

### Checkbox Group Field

Compose Field around a checkbox group when related options share one label context.

:::example CheckboxGroupField

### Combobox Field

Compose Field around Combobox when a filterable list needs label and error text.

:::example ComboboxField

### Combobox Multiple Field

Compose Field around a multi-select Combobox when several values share one field label.

:::example ComboboxMultipleField

### Number Input Story

Compose Field around Number Input when a numeric value needs label and error text.

:::example NumberInputStory

### Radio Group Field

Compose Field around Radio Group when exclusive options share one field label.

:::example RadioGroupField

### Select Field

Compose Field around Select when a single choice needs label and error text.

:::example SelectField

### Slider Field

Compose Field around Slider when a range value needs label and error text.

:::example SliderField

### Switch Field

Compose Field around Switch when an on/off setting needs label and error text.

:::example SwitchField

### Textarea Field

Compose Field around Textarea when multi-line text needs label and error text.

:::example TextareaField

### Field Group

Group several fields under shared context.

:::example FieldGroup

### With Input Group

Combine Field with Input Group when addons sit on the control.

:::example WithInputGroup

### Required Field

Mark the field required and surface that expectation in the label.

:::example RequiredField

### Disabled Field

Show that the field is unavailable.

:::example DisabledField

### With Error

Show error text under the control when validation fails.

:::example WithError

