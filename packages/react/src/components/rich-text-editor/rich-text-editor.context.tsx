import type { RichTextEditorVariants } from "@pisagor/recipes/rich-text-editor";
import type { Editor } from "@tiptap/react";
import { createContext } from "../../utils";

interface RichTextEditorContextValue {
  editor: Editor | null;
  slots: RichTextEditorVariants;
}

export const { RichTextEditorContext, useRichTextEditor: useRichTextEditorState } =
  createContext<RichTextEditorContextValue>()({
    name: "RichTextEditor",
  });

/**
 * Access the TipTap editor instance from the nearest RichTextEditor root.
 */
export function useRichTextEditor() {
  return useRichTextEditorState().editor;
}
