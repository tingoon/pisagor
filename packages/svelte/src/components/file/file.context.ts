import type { FileRecipe } from "@pisagor/recipes/file";
import { createContext } from "../../utils/create-context";

interface FileContextValue {
  slots: FileRecipe;
}

const ctx = createContext<FileContextValue>({ name: "File" });
export const setFileContext = ctx.setContext;
export const useFile = ctx.getContext;
