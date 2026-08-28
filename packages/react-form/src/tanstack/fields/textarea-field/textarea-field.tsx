import {
  TextareaField as TextareaFieldControl,
  type TextareaFieldProps,
} from "../../../fields/textarea-field/textarea-field";
import { createFieldComponent } from "../../create-field-component";

type TextareaFieldControlProps = TextareaFieldProps;
type ConnectedTextareaFieldProps = Pick<
  TextareaFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const TextareaField = createFieldComponent<
  string,
  TextareaFieldControlProps,
  ConnectedTextareaFieldProps
>(TextareaFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value,
}));
