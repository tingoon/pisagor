import { RichTextEditor } from "@pisagor/react/rich-text-editor";

export function Compound() {
  return (
    <RichTextEditor.Root defaultValue="<p>Start writing…</p>">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  );
}
