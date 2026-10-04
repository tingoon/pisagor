import autocomplete_fieldRaw from "./autocomplete-field.vue?raw";
import checkbox_fieldRaw from "./checkbox-field.vue?raw";
import checkbox_group_fieldRaw from "./checkbox-group-field.vue?raw";
import combobox_fieldRaw from "./combobox-field.vue?raw";
import combobox_multiple_fieldRaw from "./combobox-multiple-field.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabled_fieldRaw from "./disabled-field.vue?raw";
import field_groupRaw from "./field-group.vue?raw";
import number_input_storyRaw from "./number-input-story.vue?raw";
import on_surfaceRaw from "./on-surface.vue?raw";
import orientation_horizontalRaw from "./orientation-horizontal.vue?raw";
import orientation_verticalRaw from "./orientation-vertical.vue?raw";
import radio_group_fieldRaw from "./radio-group-field.vue?raw";
import required_fieldRaw from "./required-field.vue?raw";
import select_fieldRaw from "./select-field.vue?raw";
import slider_fieldRaw from "./slider-field.vue?raw";
import switch_fieldRaw from "./switch-field.vue?raw";
import textarea_fieldRaw from "./textarea-field.vue?raw";
import with_errorRaw from "./with-error.vue?raw";
import with_input_groupRaw from "./with-input-group.vue?raw";
import with_separatorRaw from "./with-separator.vue?raw";

export const imports = `import { Field } from "@pisagor/vue";`;

export const sources = {
  AutocompleteField: autocomplete_fieldRaw,
  CheckboxField: checkbox_fieldRaw,
  CheckboxGroupField: checkbox_group_fieldRaw,
  ComboboxField: combobox_fieldRaw,
  ComboboxMultipleField: combobox_multiple_fieldRaw,
  Default: defaultRaw,
  DisabledField: disabled_fieldRaw,
  FieldGroup: field_groupRaw,
  NumberInputStory: number_input_storyRaw,
  OnSurface: on_surfaceRaw,
  OrientationHorizontal: orientation_horizontalRaw,
  OrientationVertical: orientation_verticalRaw,
  RadioGroupField: radio_group_fieldRaw,
  RequiredField: required_fieldRaw,
  SelectField: select_fieldRaw,
  SliderField: slider_fieldRaw,
  SwitchField: switch_fieldRaw,
  TextareaField: textarea_fieldRaw,
  WithError: with_errorRaw,
  WithInputGroup: with_input_groupRaw,
  WithSeparator: with_separatorRaw,
} as const;

export { default as AutocompleteField } from "./autocomplete-field.vue";
export { default as CheckboxField } from "./checkbox-field.vue";
export { default as CheckboxGroupField } from "./checkbox-group-field.vue";
export { default as ComboboxField } from "./combobox-field.vue";
export { default as ComboboxMultipleField } from "./combobox-multiple-field.vue";
export { default as Default } from "./default.vue";
export { default as DisabledField } from "./disabled-field.vue";
export { default as FieldGroup } from "./field-group.vue";
export { default as NumberInputStory } from "./number-input-story.vue";
export { default as OnSurface } from "./on-surface.vue";
export { default as OrientationHorizontal } from "./orientation-horizontal.vue";
export { default as OrientationVertical } from "./orientation-vertical.vue";
export { default as RadioGroupField } from "./radio-group-field.vue";
export { default as RequiredField } from "./required-field.vue";
export { default as SelectField } from "./select-field.vue";
export { default as SliderField } from "./slider-field.vue";
export { default as SwitchField } from "./switch-field.vue";
export { default as TextareaField } from "./textarea-field.vue";
export { default as WithError } from "./with-error.vue";
export { default as WithInputGroup } from "./with-input-group.vue";
export { default as WithSeparator } from "./with-separator.vue";
