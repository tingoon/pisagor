import type { ClipboardSlots } from "@pisagor/recipes/clipboard";
import { createContext } from "../../internal/utils";

interface ClipboardContextValue {
  slots: ClipboardSlots;
}

export const { ClipboardContext, useClipboard } = createContext<ClipboardContextValue>()({
  name: "Clipboard",
});
