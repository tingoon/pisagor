import type { TextareaSlots } from "@pisagor/recipes/textarea";
import { createContext } from "../../internal/utils";

interface TextareaContextValue {
  slots: TextareaSlots;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
