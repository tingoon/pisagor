import { RichTextEditorField } from "..";

export function Disabled() {
  return (
    <RichTextEditorField
      defaultValue="<p>Write a short announcement…</p>"
      disabled
      id="rich-text-editor-field-body-disabled"
      label="Body"
    />
  );
}
