import type { FileRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface FileContextValue {
  slots: FileRecipe;
}

const ctx = createContext("File")<FileContextValue>();
export const setFileContext = ctx.setContext;
export const useFile = ctx.getContext;
