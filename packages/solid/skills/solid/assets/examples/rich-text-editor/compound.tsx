/** @jsxImportSource solid-js */
import { RichTextEditor } from "@pisagor/solid/rich-text-editor";

export function Compound() {
  return (
    <RichTextEditor.Root defaultValue="<p>Compose the toolbar and content yourself.</p>">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  );
}
