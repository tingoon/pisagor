import type { AnyFieldApi } from "@tanstack/vue-form";
import {
  type FormAsyncValidateOrFn,
  type FormOptions,
  type FormValidateOrFn,
  useForm,
} from "@tanstack/vue-form";
import { type Component, defineComponent, h, type PropType, provide } from "vue";
import { createRoot } from "./components/root";
import { SubmitButton } from "./components/submit-button";
import {
  type FieldContextValue,
  type FormContextValue,
  fieldContext,
  fieldContextKey,
  formContext,
  formContextKey,
  useFormContext,
} from "./contexts";
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

type ArkPart = Parameters<typeof h>[0];

const FieldContextProvider = defineComponent({
  inheritAttrs: false,
  name: "FieldContextProvider",
  props: {
    field: { required: true, type: Object as PropType<AnyFieldApi> },
  },
  setup(props, { slots }) {
    provide(fieldContextKey, props as FieldContextValue);
    return () => slots.default?.();
  },
});

interface CreateFormHookOptions {
  fieldComponents: Record<string, Component>;
  fieldContext: typeof fieldContext;
  formComponents: Record<string, Component>;
  formContext: typeof formContext;
}

function createFormHook({ fieldComponents, formComponents }: CreateFormHookOptions) {
  function useAppFormBase<
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
    const form = useForm(props);

    const AppForm = defineComponent({
      inheritAttrs: false,
      name: "AppForm",
      setup(_, { slots }) {
        provide(formContextKey, form as unknown as FormContextValue);
        return () => slots.default?.();
      },
    });

    const AppField = defineComponent({
      inheritAttrs: false,
      name: "AppField",
      props: {
        name: { required: true, type: String as PropType<string> },
      },
      setup(fieldProps, { attrs, slots }) {
        return () =>
          h(
            form.Field as ArkPart,
            { ...attrs, name: fieldProps.name },
            {
              default: ({ field }: { field: AnyFieldApi }) =>
                h(FieldContextProvider, { field }, () => {
                  const connected = Object.assign(field, fieldComponents);
                  return slots.default?.(connected);
                }),
            },
          );
      },
    });

    return Object.assign(form, {
      AppField,
      AppForm,
      ...formComponents,
    });
  }

  function withForm<TProps extends object>({
    render,
    props,
  }: {
    props?: TProps;
    render: (props: TProps) => unknown;
  }) {
    return function Render(innerProps: TProps) {
      return render({ ...props, ...innerProps } as TProps);
    };
  }

  function withFieldGroup<TProps extends object>({
    render,
    props,
  }: {
    props?: TProps;
    render: (props: TProps) => unknown;
  }) {
    return function Render(innerProps: TProps) {
      return render({ ...props, ...innerProps } as TProps);
    };
  }

  function extendForm(extension: {
    fieldComponents?: Record<string, Component>;
    formComponents?: Record<string, Component>;
  }) {
    return createFormHook({
      fieldComponents: {
        ...fieldComponents,
        ...extension.fieldComponents,
      },
      fieldContext,
      formComponents: {
        ...formComponents,
        ...extension.formComponents,
      },
      formContext,
    });
  }

  return {
    extendForm,
    useAppForm: useAppFormBase,
    useTypedAppFormContext: useFormContext,
    withFieldGroup,
    withForm,
  };
}

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
  const Root = createRoot(form);

  return Object.assign(form, { Root }) as typeof form & {
    Root: ReturnType<typeof createRoot>;
    SubmitButton: typeof SubmitButton;
  };
}

export { extendForm, withFieldGroup, withForm };
