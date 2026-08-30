import {
  SelectField as SelectFieldControl,
  type SelectFieldProps,
} from "../../../fields/select-field/select-field";
import { createFieldComponent } from "../../create-field-component";

type SelectFieldControlProps = SelectFieldProps;
type ConnectedSelectFieldProps = Pick<
  SelectFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const SelectField = createFieldComponent<
  string,
  SelectFieldControlProps,
  ConnectedSelectFieldProps
>(SelectFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value,
}));
