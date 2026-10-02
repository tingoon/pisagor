---
title: Field
description: "Wraps a form control with label, description, and error text so inputs are easier to complete correctly."
api: compound
taxonomy: standard
---

## When to use

- Pair a control with label, description, and error text for accessible form layout.
- Prefer `@pisagor/react-form` fields for common controls; use Field for custom layouts.
- Use Field Group when several controls share one label context.

## Import

```tsx
import { Field } from "@pisagor/react";
```

Style with `@pisagor/recipes/field` — no app-level `tv()`.

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

### Disabled Field

Show that the field is unavailable. Prefer explaining why nearby.

:::example DisabledField

### Field Group

Group several fields under shared context.

:::example FieldGroup

### With Input Group

Combine Field with Input Group when addons sit on the control.

:::example WithInputGroup

### Number Input Story

Compose Field around Number Input when a numeric value needs label and error text.

:::example NumberInputStory

### Radio Group Field

Compose Field around Radio Group when exclusive options share one field label.

:::example RadioGroupField

### Required Field

Mark the field required and surface that expectation in the label.

:::example RequiredField

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

### With Error

Show error text under the control when validation fails.

:::example WithError
