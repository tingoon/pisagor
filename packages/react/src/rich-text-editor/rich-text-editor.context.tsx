import type { RichTextEditorRecipe } from "@pisagor/recipes";

import type { Editor } from "@tiptap/react";
import { createContext } from "../utils";

interface RichTextEditorContextValue {
  editor: Editor | null;
  slots: RichTextEditorRecipe;
}

export const {
  RichTextEditorContext,
  useRichTextEditor: useRichTextEditorState,
} = createContext("RichTextEditor")<RichTextEditorContextValue>();

/**
 * Access the TipTap editor instance from the nearest RichTextEditor root.
 */
export function useRichTextEditor() {
  return useRichTextEditorState().editor;
}
