import type { TextareaRecipe } from "@pisagor/recipes/textarea";
import { createContext } from "../../utils";

interface TextareaContextValue {
  slots: TextareaRecipe;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
