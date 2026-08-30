import {
  TagsInputField as TagsInputFieldControl,
  type TagsInputFieldProps,
} from "../../../fields/tags-input-field/tags-input-field";
import { createFieldComponent } from "../../create-field-component";

type TagsInputFieldControlProps = TagsInputFieldProps;
type ConnectedTagsInputFieldProps = Pick<
  TagsInputFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const TagsInputField = createFieldComponent<
  string[],
  TagsInputFieldControlProps,
  ConnectedTagsInputFieldProps
>(TagsInputFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string[]) => field.handleChange(value),
  value: field.state.value,
}));
