import type { DatePickerProps } from "@pisagor/react";
import {
  DateField as DateFieldControl,
  type DateFieldProps,
} from "../../../fields/date-field/date-field";
import { createFieldComponent } from "../../create-field-component";

type DatePickerValue = DatePickerProps["value"];
type DateFieldControlProps = DateFieldProps;
type ConnectedDateFieldProps = Pick<
  DateFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const DateField = createFieldComponent<
  DatePickerValue,
  DateFieldControlProps,
  ConnectedDateFieldProps
>(DateFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: DatePickerValue) => field.handleChange(value),
  value: field.state.value as DatePickerValue,
}));
