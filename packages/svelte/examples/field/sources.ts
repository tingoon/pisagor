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

export const imports = `import { Field } from "@pisagor/svelte";`;

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
