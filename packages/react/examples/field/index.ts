import { stripTsxExample } from "@pisagor/utils";
import autocomplete_fieldRaw from "./autocomplete-field.tsx?raw";
import checkbox_fieldRaw from "./checkbox-field.tsx?raw";
import checkbox_group_fieldRaw from "./checkbox-group-field.tsx?raw";
import combobox_fieldRaw from "./combobox-field.tsx?raw";
import combobox_multiple_fieldRaw from "./combobox-multiple-field.tsx?raw";
import defaultRaw from "./default.tsx?raw";
import disabled_fieldRaw from "./disabled-field.tsx?raw";
import field_groupRaw from "./field-group.tsx?raw";
import number_input_storyRaw from "./number-input-story.tsx?raw";
import orientation_horizontalRaw from "./orientation-horizontal.tsx?raw";
import orientation_verticalRaw from "./orientation-vertical.tsx?raw";
import radio_group_fieldRaw from "./radio-group-field.tsx?raw";
import required_fieldRaw from "./required-field.tsx?raw";
import select_fieldRaw from "./select-field.tsx?raw";
import slider_fieldRaw from "./slider-field.tsx?raw";
import switch_fieldRaw from "./switch-field.tsx?raw";
import textarea_fieldRaw from "./textarea-field.tsx?raw";
import with_errorRaw from "./with-error.tsx?raw";
import with_input_groupRaw from "./with-input-group.tsx?raw";

export const imports = `import { Field } from "@pisagor/react";`;

export const sources = {
  AutocompleteField: stripTsxExample(autocomplete_fieldRaw),
  CheckboxField: stripTsxExample(checkbox_fieldRaw),
  CheckboxGroupField: stripTsxExample(checkbox_group_fieldRaw),
  ComboboxField: stripTsxExample(combobox_fieldRaw),
  ComboboxMultipleField: stripTsxExample(combobox_multiple_fieldRaw),
  Default: stripTsxExample(defaultRaw),
  DisabledField: stripTsxExample(disabled_fieldRaw),
  FieldGroup: stripTsxExample(field_groupRaw),
  NumberInputStory: stripTsxExample(number_input_storyRaw),
  OrientationHorizontal: stripTsxExample(orientation_horizontalRaw),
  OrientationVertical: stripTsxExample(orientation_verticalRaw),
  RadioGroupField: stripTsxExample(radio_group_fieldRaw),
  RequiredField: stripTsxExample(required_fieldRaw),
  SelectField: stripTsxExample(select_fieldRaw),
  SliderField: stripTsxExample(slider_fieldRaw),
  SwitchField: stripTsxExample(switch_fieldRaw),
  TextareaField: stripTsxExample(textarea_fieldRaw),
  WithError: stripTsxExample(with_errorRaw),
  WithInputGroup: stripTsxExample(with_input_groupRaw),
} as const;

export * from "./autocomplete-field";
export * from "./checkbox-field";
export * from "./checkbox-group-field";
export * from "./combobox-field";
export * from "./combobox-multiple-field";
export * from "./default";
export * from "./disabled-field";
export * from "./field-group";
export * from "./number-input-story";
export * from "./orientation-horizontal";
export * from "./orientation-vertical";
export * from "./radio-group-field";
export * from "./required-field";
export * from "./select-field";
export * from "./slider-field";
export * from "./switch-field";
export * from "./textarea-field";
export * from "./with-error";
export * from "./with-input-group";
