import type { ClipboardVariants } from "@pisagor/recipes/clipboard";
import { createContext } from "../../utils";

interface ClipboardContextValue {
  slots: ClipboardVariants;
}

export const { ClipboardContext, useClipboard } = createContext<ClipboardContextValue>()({
  name: "Clipboard",
});
