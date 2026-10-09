import { NumberInput, type NumberInputProps } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../internal/field-shell";

// #region Types
type NumberInputControlProps = Omit<
  NumberInputProps,
  "invalid" | "name" | "value" | "onValueChange" | "placeholder"
>;

export interface NumberFieldProps
  extends FieldPresentationProps,
    NumberInputControlProps {
  name?: string;
  value?: number;
  placeholder?: string;
  onBlur?: () => void;
  onValueChange?: (value: number) => void;
}
// #endregion

// #region Component
export function NumberField(props: NumberFieldProps) {
  const [local, numberInputProps] = splitProps(props, [
    "orientation",
    "clearable",
    "invalid",
    "name",
    "value",
    "description",
    "error",
    "id",
    "label",
    "labelAccessory",
    "labelProps",
    "placeholder",
    "onBlur",
    "onValueChange",
    "class",
  ]);
  const clearable = () => local.clearable ?? false;

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
      <NumberInput
        {...numberInputProps}
        {...(local.value !== undefined
          ? { value: Number.isFinite(local.value) ? String(local.value) : "" }
          : {})}
        clearable={clearable()}
        id={local.id}
        invalid={local.invalid}
        name={local.name}
        onBlur={local.onBlur}
        onValueChange={local.onValueChange}
        placeholder={local.placeholder}
      />
    </FieldShell>
  );
}
// #endregion
