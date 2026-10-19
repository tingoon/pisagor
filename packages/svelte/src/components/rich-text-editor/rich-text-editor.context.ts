import {
  type RichTextEditorRecipe,
  richTextEditorRecipe,
} from "@pisagor/recipes";
import type { Editor } from "@tiptap/core";
import { createSlotRecipeContext } from "../../internal";
import { createContext } from "../../utils/create-context";

export const { withContext, withProvider, useStyles } = createSlotRecipeContext(
  {
    name: "RichTextEditor",
    recipe: richTextEditorRecipe,
  },
);

export interface RichTextEditorContextValue {
  editor: Editor | undefined;
  registerHost: (el: HTMLDivElement | null) => void;
  revision: number;
  slots: RichTextEditorRecipe;
}

const ctx = createContext("RichTextEditor")<RichTextEditorContextValue>();
export const setRichTextEditorContext = ctx.setContext;
export const useRichTextEditorState = ctx.getContext;

/** Access the TipTap editor instance from the nearest RichTextEditor root. */
export function useRichTextEditor() {
  return useRichTextEditorState().editor;
}
