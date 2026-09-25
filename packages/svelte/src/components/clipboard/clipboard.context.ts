import type { ClipboardRecipe } from "@pisagor/recipes/clipboard";
import { createContext } from "../../utils/create-context";

interface ClipboardContextValue {
  slots: ClipboardRecipe;
}

export const { setContext: setClipboardContext, getContext: useClipboard } =
  createContext<ClipboardContextValue>({ name: "Clipboard" });
