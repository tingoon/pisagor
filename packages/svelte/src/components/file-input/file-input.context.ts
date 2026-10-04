import type { FileInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface FileInputContextValue {
  slots: FileInputRecipe;
}

const ctx = createContext("FileInput")<FileInputContextValue>();
export const setFileInputContext = ctx.setContext;
