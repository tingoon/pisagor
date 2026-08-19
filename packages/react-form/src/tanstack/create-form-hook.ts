import type { FormAsyncValidateOrFn, FormOptions, FormValidateOrFn } from "@tanstack/react-form";
import { createFormHook } from "@tanstack/react-form";
import { useMemo } from "react";
import { createRoot } from "./components/root";
import { SubmitButton } from "./components/submit-button";
import { fieldContext, formContext } from "./contexts";
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

const {
  useAppForm: baseUseAppForm,
  withForm,
  withFieldGroup,
  extendForm,
} = createFormHook({
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
  fieldContext,
  formComponents: {
    SubmitButton,
  },
  formContext,
});

export function useAppForm<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
>(
  props: FormOptions<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
) {
  const form = baseUseAppForm(props);
  const Root = useMemo(() => createRoot(form), [form]);

  return Object.assign(form, { Root }) as typeof form & {
    Root: ReturnType<typeof createRoot>;
  };
}

export { extendForm, withFieldGroup, withForm };
