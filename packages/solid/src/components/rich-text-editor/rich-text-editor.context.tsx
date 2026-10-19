import type { Editor } from "@tiptap/core";
import type { Accessor } from "solid-js";
import { createContext } from "../../utils";

interface RichTextEditorContextValue {
  editor: Accessor<Editor | undefined>;
  registerHost: (el: HTMLDivElement | undefined) => void;
}

export const {
  RichTextEditorContext,
  useRichTextEditor: useRichTextEditorState,
} = createContext("RichTextEditor")<RichTextEditorContextValue>();

/** Access the TipTap editor instance from the nearest RichTextEditor root. */
export function useRichTextEditor() {
  return useRichTextEditorState().editor();
}
