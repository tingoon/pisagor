import AutocompleteField from "./autocomplete-field.vue?raw";
import CheckboxField from "./checkbox-field.vue?raw";
import CheckboxGroupField from "./checkbox-group-field.vue?raw";
import ComboboxField from "./combobox-field.vue?raw";
import ComboboxMultipleField from "./combobox-multiple-field.vue?raw";
import Default from "./default.vue?raw";
import DisabledField from "./disabled-field.vue?raw";
import FieldGroup from "./field-group.vue?raw";
import NumberInputStory from "./number-input-story.vue?raw";
import OrientationHorizontal from "./orientation-horizontal.vue?raw";
import OrientationVertical from "./orientation-vertical.vue?raw";
import RadioGroupField from "./radio-group-field.vue?raw";
import RequiredField from "./required-field.vue?raw";
import SelectField from "./select-field.vue?raw";
import SliderField from "./slider-field.vue?raw";
import SwitchField from "./switch-field.vue?raw";
import TextareaField from "./textarea-field.vue?raw";
import WithError from "./with-error.vue?raw";
import WithInputGroup from "./with-input-group.vue?raw";

export const imports = `import { Field } from "@pisagor/vue";`;

export const sources = {
  AutocompleteField,
  CheckboxField,
  CheckboxGroupField,
  ComboboxField,
  ComboboxMultipleField,
  Default,
  DisabledField,
  FieldGroup,
  NumberInputStory,
  OrientationHorizontal,
  OrientationVertical,
  RadioGroupField,
  RequiredField,
  SelectField,
  SliderField,
  SwitchField,
  TextareaField,
  WithError,
  WithInputGroup,
} as const;
