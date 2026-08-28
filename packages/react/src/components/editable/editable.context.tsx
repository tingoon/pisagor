import type { EditableVariants } from "@pisagor/recipes/editable";
import { createContext } from "../../internal/utils";

interface EditableContextValue {
  slots: EditableVariants;
}

export const { EditableContext, useEditable } = createContext<EditableContextValue>()({
  name: "Editable",
});
