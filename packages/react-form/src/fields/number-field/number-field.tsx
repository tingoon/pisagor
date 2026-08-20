import type { NumberInputProps } from "@pisagor/react";
import { NumberInput } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type NumberInputControlProps = SetRequired<
  Omit<NumberInputProps, "invalid" | "name" | "value">,
  "onValueChange"
>;

export interface NumberFieldProps extends FieldPresentationProps, NumberInputControlProps {
  name?: string;
  onBlur?: () => void;
  placeholder?: string;
  value?: number;
}
// #endregion

// #region Component
export function NumberField({
  className,
  clearable = false,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  placeholder,
  value,
  ...numberInputProps
}: NumberFieldProps) {
  return (
    <FieldShell
      className={className}
      description={description}
      error={error}
      id={id}
      invalid={invalid}
      label={label}
      labelAccessory={labelAccessory}
      labelProps={labelProps}
    >
      <NumberInput
        {...numberInputProps}
        clearable={clearable}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
        {...(value !== undefined ? { value: Number.isFinite(value) ? String(value) : "" } : {})}
      >
        <NumberInput.Group clearable={clearable}>
          <NumberInput.Decrement />
          <NumberInput.Input placeholder={placeholder} />
          {clearable ? <NumberInput.ClearTrigger /> : null}
          <NumberInput.Increment />
        </NumberInput.Group>
      </NumberInput>
    </FieldShell>
  );
}
// #endregion
