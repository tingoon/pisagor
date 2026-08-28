import type { TextareaVariants } from "@pisagor/recipes/textarea";
import { createContext } from "../../internal/utils";

interface TextareaContextValue {
  slots: TextareaVariants;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
