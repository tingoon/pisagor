import type { ComponentProps } from "svelte";
import type AutocompleteFieldComponent from "./autocomplete-field.svelte";
import type CheckboxFieldComponent from "./checkbox-field.svelte";
import type DateFieldComponent from "./date-field.svelte";
import type FileFieldComponent from "./file-field.svelte";
import type NumberFieldComponent from "./number-field.svelte";
import type OtpFieldComponent from "./otp-field.svelte";
import type PasswordFieldComponent from "./password-field.svelte";
import type PhoneFieldComponent from "./phone-field.svelte";
import type RadioGroupFieldComponent from "./radio-group-field.svelte";
import type RichTextEditorFieldComponent from "./rich-text-editor-field.svelte";
import type SelectFieldComponent from "./select-field.svelte";
import type SliderFieldComponent from "./slider-field.svelte";
import type SwitchFieldComponent from "./switch-field.svelte";
import type TagsInputFieldComponent from "./tags-input-field.svelte";
import type TextFieldComponent from "./text-field.svelte";
import type TextareaFieldComponent from "./textarea-field.svelte";

export type AutocompleteFieldProps = ComponentProps<
  typeof AutocompleteFieldComponent
>;
export type CheckboxFieldProps = ComponentProps<typeof CheckboxFieldComponent>;
export type DateFieldProps = ComponentProps<typeof DateFieldComponent>;
export type FileFieldProps = ComponentProps<typeof FileFieldComponent>;
export type NumberFieldProps = ComponentProps<typeof NumberFieldComponent>;
export type OtpFieldProps = ComponentProps<typeof OtpFieldComponent>;
export type PasswordFieldProps = ComponentProps<typeof PasswordFieldComponent>;
export type PhoneFieldProps = ComponentProps<typeof PhoneFieldComponent>;
export type RadioGroupFieldProps = ComponentProps<
  typeof RadioGroupFieldComponent
>;
export type RichTextEditorFieldProps = ComponentProps<
  typeof RichTextEditorFieldComponent
>;
export type SelectFieldProps = ComponentProps<typeof SelectFieldComponent>;
export type SliderFieldProps = ComponentProps<typeof SliderFieldComponent>;
export type SwitchFieldProps = ComponentProps<typeof SwitchFieldComponent>;
export type TagsInputFieldProps = ComponentProps<
  typeof TagsInputFieldComponent
>;
export type TextFieldProps = ComponentProps<typeof TextFieldComponent>;
export type TextareaFieldProps = ComponentProps<typeof TextareaFieldComponent>;

export { default as AutocompleteField } from "./autocomplete-field.svelte";
export { default as CheckboxField } from "./checkbox-field.svelte";
export { default as DateField } from "./date-field.svelte";
export { default as FileField } from "./file-field.svelte";
export { default as NumberField } from "./number-field.svelte";
export { default as OtpField } from "./otp-field.svelte";
export { default as PasswordField } from "./password-field.svelte";
export { default as PhoneField } from "./phone-field.svelte";
export { default as RadioGroupField } from "./radio-group-field.svelte";
export { default as RichTextEditorField } from "./rich-text-editor-field.svelte";
export { default as SelectField } from "./select-field.svelte";
export { default as SliderField } from "./slider-field.svelte";
export { default as SwitchField } from "./switch-field.svelte";
export { default as TagsInputField } from "./tags-input-field.svelte";
export { default as TextField } from "./text-field.svelte";
export { default as TextareaField } from "./textarea-field.svelte";
