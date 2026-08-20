import {
  RichTextEditorContent,
  RichTextEditorRoot,
  RichTextEditorShorthand,
  RichTextEditorToolbar,
} from "./rich-text-editor";

export type {
  RichTextEditorContentProps,
  RichTextEditorRootProps,
  RichTextEditorToolbarProps,
} from "./rich-text-editor";

export { useRichTextEditor } from "./rich-text-editor.context";

export const RichTextEditor = Object.assign(RichTextEditorShorthand, {
  Content: RichTextEditorContent,
  Root: RichTextEditorRoot,
  Toolbar: RichTextEditorToolbar,
});
