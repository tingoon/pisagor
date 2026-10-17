import AutocompleteField from "./autocomplete-field.svelte?raw";
import CheckboxField from "./checkbox-field.svelte?raw";
import CheckboxGroupField from "./checkbox-group-field.svelte?raw";
import ComboboxField from "./combobox-field.svelte?raw";
import ComboboxMultipleField from "./combobox-multiple-field.svelte?raw";
import Default from "./default.svelte?raw";
import DisabledField from "./disabled-field.svelte?raw";
import FieldGroup from "./field-group.svelte?raw";
import NumberInputStory from "./number-input-story.svelte?raw";
import OrientationHorizontal from "./orientation-horizontal.svelte?raw";
import OrientationVertical from "./orientation-vertical.svelte?raw";
import RadioGroupField from "./radio-group-field.svelte?raw";
import RequiredField from "./required-field.svelte?raw";
import SelectField from "./select-field.svelte?raw";
import SliderField from "./slider-field.svelte?raw";
import SwitchField from "./switch-field.svelte?raw";
import TextareaField from "./textarea-field.svelte?raw";
import WithError from "./with-error.svelte?raw";
import WithInputGroup from "./with-input-group.svelte?raw";

export const imports = `import { Field } from "@pisagor/svelte";`;

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
