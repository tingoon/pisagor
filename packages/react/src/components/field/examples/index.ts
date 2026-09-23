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

export const imports = `import { Field } from "@pisagor/react/field";`;

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

export { AutocompleteField } from "./autocomplete-field";
export { CheckboxField } from "./checkbox-field";
export { CheckboxGroupField } from "./checkbox-group-field";
export { ComboboxField } from "./combobox-field";
export { ComboboxMultipleField } from "./combobox-multiple-field";
export { Default } from "./default";
export { DisabledField } from "./disabled-field";
export { FieldGroup } from "./field-group";
export { NumberInputStory } from "./number-input-story";
export { OrientationHorizontal } from "./orientation-horizontal";
export { OrientationVertical } from "./orientation-vertical";
export { RadioGroupField } from "./radio-group-field";
export { RequiredField } from "./required-field";
export { SelectField } from "./select-field";
export { SliderField } from "./slider-field";
export { SwitchField } from "./switch-field";
export { TextareaField } from "./textarea-field";
export { WithError } from "./with-error";
export { WithInputGroup } from "./with-input-group";
