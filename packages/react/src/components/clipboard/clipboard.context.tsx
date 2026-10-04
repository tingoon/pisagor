import type { ClipboardRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ClipboardContextValue {
  slots: ClipboardRecipe;
}

export const { ClipboardContext, useClipboard } =
  createContext("Clipboard")<ClipboardContextValue>();
