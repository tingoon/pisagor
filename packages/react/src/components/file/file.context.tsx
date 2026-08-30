import type { FileRecipe } from "@pisagor/recipes/file";
import { createContext } from "../../internal/utils";

interface FileContextValue {
  slots: FileRecipe;
}

export const { FileContext, useFile } = createContext<FileContextValue>()({
  name: "File",
});
