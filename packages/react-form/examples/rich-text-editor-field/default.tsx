import { RichTextEditorField } from "@pisagor/react-form";

export function Default() {
  return (
    <RichTextEditorField
      description="Shown on the product page. Use headings and lists to structure it."
      id="rich-text-editor-field-description"
      label="Product description"
    />
  );
}
