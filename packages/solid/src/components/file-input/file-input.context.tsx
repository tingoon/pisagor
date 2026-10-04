import type { FileInputRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface FileInputContextValue {
  slots: FileInputRecipe;
}

export const { FileInputContext, useFileInput } =
  createContext("FileInput")<FileInputContextValue>();
