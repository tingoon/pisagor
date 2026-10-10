import autocomplete_fieldRaw from "./autocomplete-field.vue?raw";
import checkbox_fieldRaw from "./checkbox-field.vue?raw";
import checkbox_group_fieldRaw from "./checkbox-group-field.vue?raw";
import combobox_fieldRaw from "./combobox-field.vue?raw";
import combobox_multiple_fieldRaw from "./combobox-multiple-field.vue?raw";
import defaultRaw from "./default.vue?raw";
import disabled_fieldRaw from "./disabled-field.vue?raw";
import field_groupRaw from "./field-group.vue?raw";
import number_input_storyRaw from "./number-input-story.vue?raw";
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
} as const;
