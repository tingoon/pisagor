import {
  SwitchField as SwitchFieldControl,
  type SwitchFieldProps,
} from "../../../fields/switch-field/switch-field";
import { createFieldComponent } from "../../create-field-component";

type SwitchFieldControlProps = SwitchFieldProps;
type ConnectedSwitchFieldProps = Pick<
  SwitchFieldControlProps,
  "checked" | "error" | "invalid" | "name" | "onBlur" | "onValueChange"
>;

export const SwitchField = createFieldComponent<
  boolean,
  SwitchFieldControlProps,
  ConnectedSwitchFieldProps
>(SwitchFieldControl, ({ error, field, invalid }) => ({
  checked: field.state.value as boolean,
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: boolean) => field.handleChange(value),
}));
