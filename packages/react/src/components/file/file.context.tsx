import type { FileRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface FileContextValue {
  slots: FileRecipe;
}

export const { FileContext, useFile } =
  createContext("File")<FileContextValue>();
