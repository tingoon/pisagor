import { RichTextEditorField } from "..";

export function Invalid() {
  return (
    <RichTextEditorField
      error="Please enter some content."
      id="rich-text-editor-field-body-invalid"
      invalid
      label="Body"
    />
  );
}
