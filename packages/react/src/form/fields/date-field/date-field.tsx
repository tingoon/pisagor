import type { DatePickerProps } from "../../../components";
import { DatePicker } from "../../../components";
import { type FieldPresentationProps, FieldShell } from "../../internal/field-shell";
import type { SetRequired } from "../../internal/types";

// #region Types
type DatePickerControlProps = SetRequired<
  Omit<DatePickerProps, "invalid" | "name" | "value">,
  "onValueChange"
>;

export interface DateFieldProps extends FieldPresentationProps, DatePickerControlProps {
  name?: string;
  value?: DatePickerProps["value"];
  placeholder?: string;
  onBlur?: () => void;
}
// #endregion

// #region Part
export function DateField({
  orientation,
  invalid,
  name,
  value,
  description,
  error,
  id,
  label,
  labelAccessory,
  labelProps,
  placeholder = "Pick a date",
  onBlur,
  onValueChange,
  className,
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
      orientation={orientation}
    >
      <DatePicker
        {...datePickerProps}
        {...(value !== undefined ? { value: value ?? [] } : {})}
        invalid={invalid}
        name={name}
        onOpenChange={(details) => {
          if (!details.open) {
            onBlur?.();
          }
        }}
        onValueChange={(nextValue) => onValueChange(nextValue ?? [])}
      >
        <DatePicker.Input id={id} placeholder={placeholder} />
        <DatePicker.Content />
      </DatePicker>
    </FieldShell>
  );
}
// #endregion
