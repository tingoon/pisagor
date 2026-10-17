import source from "./default.tsx?raw";
import { RichTextEditorField } from "@pisagor/solid-form";

export function Default() {
  return (
    <RichTextEditorField
      description="Shown on the product page. Use headings and lists to structure it."
      id="rich-text-editor-field-description"
      label="Product description"
    />
  );
}

export { source as DefaultSource };
