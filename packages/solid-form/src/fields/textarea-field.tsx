import { Textarea, type TextareaProps } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
type TextareaControlProps = Omit<
  TextareaProps,
  "name" | "onBlur" | "onChange" | "onValueChange" | "value"
>;

export interface TextareaFieldProps
  extends FieldPresentationProps,
    TextareaControlProps {
  name?: string;
  value?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function TextareaField(props: TextareaFieldProps) {
  const [local, textareaProps] = splitProps(props, [
    "orientation",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "onBlur",
    "onValueChange",
    "class",
  ]);

  return (
    <FieldShell
      class={local.class}
      description={local.description}
      error={local.error}
      id={local.id}
      invalid={local.invalid}
      label={local.label}
      labelAccessory={local.labelAccessory}
      labelProps={local.labelProps}
      orientation={local.orientation}
    >
      <Textarea
        {...textareaProps}
        {...(local.value !== undefined ? { value: local.value } : {})}
        id={local.id}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={local.onValueChange}
      />
    </FieldShell>
  );
}
// #endregion
