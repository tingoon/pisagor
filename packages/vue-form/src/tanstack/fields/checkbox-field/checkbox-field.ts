import {
  CheckboxField as CheckboxFieldControl,
  type CheckboxFieldProps,
} from "../../../fields/checkbox-field/checkbox-field";
import { createFieldComponent } from "../../create-field-component";

type CheckboxFieldControlProps = CheckboxFieldProps;
type ConnectedCheckboxFieldProps = Pick<
  CheckboxFieldControlProps,
  "checked" | "error" | "invalid" | "name" | "onBlur" | "onCheckedChange"
>;

export const CheckboxField = createFieldComponent<
  boolean,
  CheckboxFieldControlProps,
  ConnectedCheckboxFieldProps
>(CheckboxFieldControl, ({ error, field, invalid }) => ({
  checked: field.state.value as boolean,
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onCheckedChange: (checked: boolean) => field.handleChange(checked),
}));
