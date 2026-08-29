import type { RichTextEditorSlots } from "@pisagor/recipes/rich-text-editor";
import type { Editor } from "@tiptap/react";
import { createContext } from "../../internal/utils";

interface RichTextEditorContextValue {
  editor: Editor | null;
  slots: RichTextEditorSlots;
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
