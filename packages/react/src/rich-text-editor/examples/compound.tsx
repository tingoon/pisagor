import { RichTextEditor } from "..";

export function Compound() {
  return (
    <RichTextEditor.Root defaultValue="<p>Compose the toolbar and content yourself.</p>">
      <RichTextEditor.Toolbar />
      <RichTextEditor.Content />
    </RichTextEditor.Root>
  );
}
