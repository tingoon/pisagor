import { AutocompleteFieldSource as AutocompleteField } from "./autocomplete-field";
import { CheckboxFieldSource as CheckboxField } from "./checkbox-field";
import { CheckboxGroupFieldSource as CheckboxGroupField } from "./checkbox-group-field";
import { ComboboxFieldSource as ComboboxField } from "./combobox-field";
import { ComboboxMultipleFieldSource as ComboboxMultipleField } from "./combobox-multiple-field";
import { DefaultSource as Default } from "./default";
import { DisabledFieldSource as DisabledField } from "./disabled-field";
import { FieldGroupSource as FieldGroup } from "./field-group";
import { NumberInputStorySource as NumberInputStory } from "./number-input-story";
import { OrientationHorizontalSource as OrientationHorizontal } from "./orientation-horizontal";
import { OrientationVerticalSource as OrientationVertical } from "./orientation-vertical";
import { RadioGroupFieldSource as RadioGroupField } from "./radio-group-field";
import { RequiredFieldSource as RequiredField } from "./required-field";
import { SelectFieldSource as SelectField } from "./select-field";
import { SliderFieldSource as SliderField } from "./slider-field";
import { SwitchFieldSource as SwitchField } from "./switch-field";
import { TextareaFieldSource as TextareaField } from "./textarea-field";
import { WithErrorSource as WithError } from "./with-error";
import { WithInputGroupSource as WithInputGroup } from "./with-input-group";

export const imports = `import { Field } from "@pisagor/react";`;

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
