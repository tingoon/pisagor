import type { Editor } from "@tiptap/react";
import { createContext } from "../../utils";

interface RichTextEditorContextValue {
  editor: Editor | null;
}

const [RichTextEditorContext, useRichTextEditorContext] = createContext<RichTextEditorContextValue>(
  {
    name: "RichTextEditor",
  },
);

/**
 * Access the TipTap editor instance from the nearest RichTextEditor root.
 */
export function useRichTextEditor() {
  return useRichTextEditorContext().editor;
}

export { RichTextEditorContext };
