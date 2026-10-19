import { Select, type SelectProps } from "@pisagor/react";
import { type FieldPresentationProps, FieldShell } from "../internal";

// #region Types
interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFieldProps
  extends
    FieldPresentationProps,
    Omit<
      SelectProps,
      "invalid" | "name" | "onValueChange" | "value" | "items"
    > {
  name?: string;
  value?: string;
  items: Array<SelectOption | string>;
  placeholder?: string;
  onBlur?: () => void;
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Component
export function SelectField({
  orientation,
  id,
  invalid,
  name,
  value,
  description,
  error,
  items,
  label,
  labelAccessory,
  placeholder = "Select an option",
  onBlur,
  onValueChange,
  className,
  labelProps,
  ...selectProps
}: SelectFieldProps) {
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
      <Select
        {...selectProps}
        {...(value !== undefined ? { value: value ? [value] : [] } : {})}
        id={id}
        invalid={invalid}
        items={items}
        name={name}
        onFocusOutside={onBlur}
        onValueChange={(nextValue) => {
          onValueChange?.(
            Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue,
          );
        }}
        placeholder={placeholder}
      />
    </FieldShell>
  );
}
// #endregion
