import type { TextareaRecipe } from "@pisagor/recipes/textarea";
import { createContext } from "../../internal/utils";

interface TextareaContextValue {
  slots: TextareaRecipe;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
