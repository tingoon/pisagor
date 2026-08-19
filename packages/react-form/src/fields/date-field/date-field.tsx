import { DatePicker, type DatePickerProps } from "@pisagor/react/date-picker";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type DatePickerControlProps = SetRequired<
  Omit<DatePickerProps, "invalid" | "name" | "value">,
  "onValueChange"
>;

export interface DateFieldProps extends FieldPresentationProps, DatePickerControlProps {
  name?: string;
  onBlur?: () => void;
  placeholder?: string;
  value?: DatePickerProps["value"];
}
// #endregion

// #region Component
export function DateField({
  className,
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
  placeholder = "Pick a date",
  value,
  ...datePickerProps
}: DateFieldProps) {
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
      <DatePicker
        {...datePickerProps}
        invalid={invalid}
        name={name}
        onOpenChange={(details) => {
          if (!details.open) {
            onBlur?.();
          }
        }}
        onValueChange={(nextValue) => onValueChange(nextValue ?? [])}
        {...(value !== undefined ? { value: value ?? [] } : {})}
      >
        <DatePicker.Input id={id} placeholder={placeholder} />
        <DatePicker.Content />
      </DatePicker>
    </FieldShell>
  );
}
// #endregion
