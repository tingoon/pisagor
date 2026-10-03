import {
  FileField as FileFieldControl,
  type FileFieldProps,
} from "../../../fields/file-field/file-field";
import { createFieldComponent } from "../../create-field-component";

type FileFieldControlProps = FileFieldProps;
type ConnectedFileFieldProps = Pick<
  FileFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange"
>;

export const FileField = createFieldComponent<
  File[],
  FileFieldControlProps,
  ConnectedFileFieldProps
>(FileFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: File[]) => field.handleChange(value),
}));
