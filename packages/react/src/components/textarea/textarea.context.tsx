import type { TextareaRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface TextareaContextValue {
  slots: TextareaRecipe;
}

export const { TextareaContext, useTextarea } =
  createContext("Textarea")<TextareaContextValue>();
