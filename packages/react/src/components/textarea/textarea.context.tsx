import type { TextareaVariants } from "@pisagor/styles/ui/textarea";
import { createContext } from "../../utils";

interface TextareaContextValue {
  slots: TextareaVariants;
}

export const { TextareaContext, useTextarea } = createContext<TextareaContextValue>()({
  name: "Textarea",
});
