import { RichTextEditor } from "../../../../../src/rich-text-editor";

export function Compound() {
  return {
    components: { RichTextEditor },
    template: `
        <RichTextEditor.Root default-value="<p>Compose the toolbar and content yourself.</p>">
          <RichTextEditor.Toolbar />
          <RichTextEditor.Content />
        </RichTextEditor.Root>
      `,
  };
}
