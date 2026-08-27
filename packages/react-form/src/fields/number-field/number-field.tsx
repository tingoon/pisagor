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
  value?: number;
  placeholder?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export function NumberField({
  clearable = false,
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  placeholder,
  onBlur,
  onValueChange,
  className,
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
        {...(value !== undefined ? { value: Number.isFinite(value) ? String(value) : "" } : {})}
        clearable={clearable}
        id={id}
        invalid={invalid}
        name={name}
        onBlur={onBlur}
        onValueChange={onValueChange}
      >
        <NumberInput.Control clearable={clearable}>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input placeholder={placeholder} />
          {clearable ? <NumberInput.ClearTrigger /> : null}
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
    </FieldShell>
  );
}
// #endregion
