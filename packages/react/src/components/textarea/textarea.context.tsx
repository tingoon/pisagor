import type { TextareaVariants } from "@pisagor/recipes/textarea";
import { createContext } from "../../utils";

interface TextareaContextValue {
  slots: TextareaVariants;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
