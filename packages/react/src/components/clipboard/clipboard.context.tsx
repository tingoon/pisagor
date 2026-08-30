import type { ClipboardRecipe } from "@pisagor/recipes/clipboard";
import { createContext } from "../../internal/utils";

interface ClipboardContextValue {
  slots: ClipboardRecipe;
}

export const { ClipboardContext, useClipboard } = createContext<ClipboardContextValue>()({
  name: "Clipboard",
});
