import {
  RichTextEditorField as RichTextEditorFieldControl,
  type RichTextEditorFieldProps,
} from "../../../fields/rich-text-editor-field/rich-text-editor-field";
import { createFieldComponent } from "../../create-field-component";

type RichTextEditorFieldControlProps = RichTextEditorFieldProps;
type ConnectedRichTextEditorFieldProps = Pick<
  RichTextEditorFieldControlProps,
  "error" | "invalid" | "name" | "onBlur" | "onValueChange" | "value"
>;

export const RichTextEditorField = createFieldComponent<
  string,
  RichTextEditorFieldControlProps,
  ConnectedRichTextEditorFieldProps
>(RichTextEditorFieldControl, ({ error, field, invalid }) => ({
  error,
  invalid,
  name: field.name,
  onBlur: field.handleBlur,
  onValueChange: (value: string) => field.handleChange(value),
  value: field.state.value as string,
}));
