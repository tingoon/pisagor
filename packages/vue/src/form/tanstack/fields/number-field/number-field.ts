import {
  NumberField as NumberFieldControl,
  type NumberFieldProps,
} from "../../../fields/number-field/number-field";
import { createFieldComponent } from "../../create-field-component";

type NumberFieldControlProps = NumberFieldProps;
type ConnectedNumberFieldProps = Pick<
  NumberFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const NumberField = createFieldComponent<
  number,
  NumberFieldControlProps,
  ConnectedNumberFieldProps
>(NumberFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: number) => field.handleChange(value),
  value: field.state.value as number,
}));
