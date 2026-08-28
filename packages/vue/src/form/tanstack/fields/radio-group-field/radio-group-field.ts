import {
  RadioGroupField as RadioGroupFieldControl,
  type RadioGroupFieldProps,
} from "../../../fields/radio-group-field/radio-group-field";
import { createFieldComponent } from "../../create-field-component";

type RadioGroupFieldControlProps = RadioGroupFieldProps;
type ConnectedRadioGroupFieldProps = Pick<
  RadioGroupFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const RadioGroupField = createFieldComponent<
  string,
  RadioGroupFieldControlProps,
  ConnectedRadioGroupFieldProps
>(RadioGroupFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value as string,
}));
