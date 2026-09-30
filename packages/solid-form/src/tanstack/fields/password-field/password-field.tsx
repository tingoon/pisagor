import {
  PasswordField as PasswordFieldControl,
  type PasswordFieldProps,
} from "../../../fields/password-field/password-field";
import { createFieldComponent } from "../../create-field-component";

type PasswordFieldControlProps = PasswordFieldProps;
type ConnectedPasswordFieldProps = Pick<
  PasswordFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const PasswordField = createFieldComponent<
  string,
  PasswordFieldControlProps,
  ConnectedPasswordFieldProps
>(PasswordFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value,
}));
