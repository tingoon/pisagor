import type { DatePickerProps } from "@pisagor/solid";
import { DatePicker } from "@pisagor/solid";
import { splitProps } from "solid-js";
import {
  type FieldPresentationProps,
  FieldShell,
} from "../../internal/field-shell";

// #region Types
type DatePickerControlProps = Omit<
  DatePickerProps,
  "invalid" | "name" | "value" | "onValueChange" | "children"
>;

export interface DateFieldProps
  extends FieldPresentationProps,
    DatePickerControlProps {
  name?: string;
  value?: DatePickerProps["value"];
  placeholder?: string;
  onBlur?: () => void;
  onValueChange?: (value: DatePickerProps["value"]) => void;
}
// #endregion

// #region Component
export function DateField(props: DateFieldProps) {
  const [local, datePickerProps] = splitProps(props, [
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
    "placeholder",
    "onBlur",
    "onValueChange",
    "class",
  ]);
  const placeholder = () => local.placeholder ?? "Pick a date";

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
      <DatePicker
        {...datePickerProps}
        {...(local.value !== undefined ? { value: local.value ?? [] } : {})}
        invalid={local.invalid}
        name={local.name}
        onOpenChange={(details) => {
          if (!details.open) {
            local.onBlur?.();
          }
        }}
        onValueChange={(nextValue) => local.onValueChange?.(nextValue ?? [])}
      >
        <DatePicker.Input id={local.id} placeholder={placeholder()} />
        <DatePicker.Content />
      </DatePicker>
    </FieldShell>
  );
}
// #endregion
