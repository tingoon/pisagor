import type { FileInputRecipe } from "@pisagor/recipes/file-input";
import { createContext } from "../../utils";

interface FileInputContextValue {
  slots: FileInputRecipe;
}

export const { FileInputContext, useFileInput } = createContext<FileInputContextValue>()({
  name: "FileInput",
});
