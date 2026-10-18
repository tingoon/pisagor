import RichTextEditorShorthand from "./rich-text-editor.svelte";
import RichTextEditorContent from "./rich-text-editor-content.svelte";
import RichTextEditorRoot from "./rich-text-editor-root.svelte";
import RichTextEditorToolbar from "./rich-text-editor-toolbar.svelte";

export { useRichTextEditor } from "./rich-text-editor.context";

export const RichTextEditor = Object.assign(RichTextEditorShorthand, {
  Content: RichTextEditorContent,
  Root: RichTextEditorRoot,
  Toolbar: RichTextEditorToolbar,
});
