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

export const imports = `import { Field } from "@pisagor/solid";`;

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
