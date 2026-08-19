import {
  OtpField as OtpFieldControl,
  type OtpFieldProps,
} from "../../../fields/otp-field/otp-field";
import { createFieldComponent } from "../../create-field-component";

type OtpFieldControlProps = OtpFieldProps;
type ConnectedOtpFieldProps = Pick<
  OtpFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const OtpField = createFieldComponent<string, OtpFieldControlProps, ConnectedOtpFieldProps>(
  OtpFieldControl,
  ({ error, field, invalid }) => ({
    error,
    invalid,
    name: field.name,
    onBlur: field.handleBlur,
    onValueChange: (value: string) => field.handleChange(value),
    value: field.state.value as string,
  }),
);
