import { createFormCreator } from "@tanstack/svelte-form";
import SubmitButton from "./components/submit-button.svelte";
import {
  AutocompleteField,
  CheckboxField,
  DateField,
  FileField,
  NumberField,
  OtpField,
  PasswordField,
  PhoneField,
  RadioGroupField,
  RichTextEditorField,
  SelectField,
  SliderField,
  SwitchField,
  TagsInputField,
  TextareaField,
  TextField,
} from "./fields";

const { createAppForm: baseCreateAppForm, getFormType } = createFormCreator({
  fieldComponents: {
    AutocompleteField,
    CheckboxField,
    DateField,
    FileField,
    NumberField,
    OtpField,
    PasswordField,
    PhoneField,
    RadioGroupField,
    RichTextEditorField,
    SelectField,
    SliderField,
    SwitchField,
    TagsInputField,
    TextareaField,
    TextField,
  },
  formComponents: {
    SubmitButton,
  },
});

export function createAppForm(
  ...args: Parameters<typeof baseCreateAppForm>
): ReturnType<typeof baseCreateAppForm> {
  return baseCreateAppForm(...args);
}

export { getFormType };
