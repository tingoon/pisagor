import type { RichTextEditorRecipe } from "@pisagor/recipes/rich-text-editor";
import type { Editor } from "@tiptap/core";
import { createContext } from "../utils/create-context";

export interface RichTextEditorContextValue {
  editor: Editor | undefined;
  registerHost: (el: HTMLDivElement | null) => void;
  revision: number;
  slots: RichTextEditorRecipe;
}

const ctx = createContext<RichTextEditorContextValue>({
  name: "RichTextEditor",
});
export const setRichTextEditorContext = ctx.setContext;
export const useRichTextEditorState = ctx.getContext;

/** Access the TipTap editor instance from the nearest RichTextEditor root. */
export function useRichTextEditor() {
  return useRichTextEditorState().editor;
}
