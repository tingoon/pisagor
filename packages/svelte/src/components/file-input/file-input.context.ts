import type { FileInputRecipe } from "@pisagor/recipes/file-input";
import { createContext } from "../../utils/create-context";

interface FileInputContextValue {
  slots: FileInputRecipe;
}

const ctx = createContext<FileInputContextValue>({ name: "FileInput" });
export const setFileInputContext = ctx.setContext;
export const useFileInput = ctx.getContext;
