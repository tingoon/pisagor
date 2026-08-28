import type { ClipboardVariants } from "@pisagor/recipes/clipboard";
import { createContext } from "../../internal/utils";

interface ClipboardContextValue {
  slots: ClipboardVariants;
}

export const { ClipboardContext, useClipboard } = createContext<ClipboardContextValue>()({
  name: "Clipboard",
});
