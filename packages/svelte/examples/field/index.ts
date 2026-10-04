import { stripSvelteExample } from "@pisagor/utils";
import autocomplete_fieldRaw from "./autocomplete-field.svelte?raw";
import checkbox_fieldRaw from "./checkbox-field.svelte?raw";
import checkbox_group_fieldRaw from "./checkbox-group-field.svelte?raw";
import combobox_fieldRaw from "./combobox-field.svelte?raw";
import combobox_multiple_fieldRaw from "./combobox-multiple-field.svelte?raw";
import defaultRaw from "./default.svelte?raw";
import disabled_fieldRaw from "./disabled-field.svelte?raw";
import field_groupRaw from "./field-group.svelte?raw";
import number_input_storyRaw from "./number-input-story.svelte?raw";
import orientation_horizontalRaw from "./orientation-horizontal.svelte?raw";
import orientation_verticalRaw from "./orientation-vertical.svelte?raw";
import radio_group_fieldRaw from "./radio-group-field.svelte?raw";
import required_fieldRaw from "./required-field.svelte?raw";
import select_fieldRaw from "./select-field.svelte?raw";
import slider_fieldRaw from "./slider-field.svelte?raw";
import switch_fieldRaw from "./switch-field.svelte?raw";
import textarea_fieldRaw from "./textarea-field.svelte?raw";
import with_errorRaw from "./with-error.svelte?raw";
import with_input_groupRaw from "./with-input-group.svelte?raw";

export const imports = `import { Field } from "@pisagor/svelte/field";`;

export const sources = {
  AutocompleteField: stripSvelteExample(autocomplete_fieldRaw),
  CheckboxField: stripSvelteExample(checkbox_fieldRaw),
  CheckboxGroupField: stripSvelteExample(checkbox_group_fieldRaw),
  ComboboxField: stripSvelteExample(combobox_fieldRaw),
  ComboboxMultipleField: stripSvelteExample(combobox_multiple_fieldRaw),
  Default: stripSvelteExample(defaultRaw),
  DisabledField: stripSvelteExample(disabled_fieldRaw),
  FieldGroup: stripSvelteExample(field_groupRaw),
  NumberInputStory: stripSvelteExample(number_input_storyRaw),
  OrientationHorizontal: stripSvelteExample(orientation_horizontalRaw),
  OrientationVertical: stripSvelteExample(orientation_verticalRaw),
  RadioGroupField: stripSvelteExample(radio_group_fieldRaw),
  RequiredField: stripSvelteExample(required_fieldRaw),
  SelectField: stripSvelteExample(select_fieldRaw),
  SliderField: stripSvelteExample(slider_fieldRaw),
  SwitchField: stripSvelteExample(switch_fieldRaw),
  TextareaField: stripSvelteExample(textarea_fieldRaw),
  WithError: stripSvelteExample(with_errorRaw),
  WithInputGroup: stripSvelteExample(with_input_groupRaw),
} as const;

export { default as AutocompleteField } from "./autocomplete-field.svelte";
export { default as CheckboxField } from "./checkbox-field.svelte";
export { default as CheckboxGroupField } from "./checkbox-group-field.svelte";
export { default as ComboboxField } from "./combobox-field.svelte";
export { default as ComboboxMultipleField } from "./combobox-multiple-field.svelte";
export { default as Default } from "./default.svelte";
export { default as DisabledField } from "./disabled-field.svelte";
export { default as FieldGroup } from "./field-group.svelte";
export { default as NumberInputStory } from "./number-input-story.svelte";
export { default as OrientationHorizontal } from "./orientation-horizontal.svelte";
export { default as OrientationVertical } from "./orientation-vertical.svelte";
export { default as RadioGroupField } from "./radio-group-field.svelte";
export { default as RequiredField } from "./required-field.svelte";
export { default as SelectField } from "./select-field.svelte";
export { default as SliderField } from "./slider-field.svelte";
export { default as SwitchField } from "./switch-field.svelte";
export { default as TextareaField } from "./textarea-field.svelte";
export { default as WithError } from "./with-error.svelte";
export { default as WithInputGroup } from "./with-input-group.svelte";
