import type { ClipboardRecipe } from "@pisagor/recipes/clipboard";
import { createContext } from "../../utils";

interface ClipboardContextValue {
  slots: ClipboardRecipe;
}

export const { ClipboardContext, useClipboard } = createContext<ClipboardContextValue>()({
  name: "Clipboard",
});
