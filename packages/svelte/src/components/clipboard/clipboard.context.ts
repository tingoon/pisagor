import type { ClipboardRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface ClipboardContextValue {
  slots: ClipboardRecipe;
}

export const { setContext: setClipboardContext, getContext: useClipboard } =
  createContext("Clipboard")<ClipboardContextValue>();
