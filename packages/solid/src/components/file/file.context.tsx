import type { FileRecipe } from "@pisagor/recipes/file";
import { createContext } from "../../utils";

interface FileContextValue {
  slots: FileRecipe;
}

export const { FileContext, useFile } = createContext<FileContextValue>()({
  name: "File",
});
