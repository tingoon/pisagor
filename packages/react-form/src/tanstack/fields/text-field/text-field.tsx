import {
  TextField as TextFieldControl,
  type TextFieldProps,
} from "../../../fields/text-field/text-field";
import { createFieldComponent } from "../../create-field-component";

type TextFieldControlProps = TextFieldProps;
type ConnectedTextFieldProps = Pick<
  TextFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const TextField = createFieldComponent<
  string,
  TextFieldControlProps,
  ConnectedTextFieldProps
>(TextFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value,
}));
