import type { Editor } from "@tiptap/react";
import { createContext } from "../../utils";

interface RichTextEditorContextValue {
  editor: Editor | null;
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
