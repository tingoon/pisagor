import {
  PhoneField as PhoneFieldControl,
  type PhoneFieldProps,
} from "../../../fields/phone-field/phone-field";
import { createFieldComponent } from "../../create-field-component";

type PhoneFieldControlProps = PhoneFieldProps;
type ConnectedPhoneFieldProps = Pick<
  PhoneFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const PhoneField = createFieldComponent<
  string,
  PhoneFieldControlProps,
  ConnectedPhoneFieldProps
>(PhoneFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value as string,
}));
