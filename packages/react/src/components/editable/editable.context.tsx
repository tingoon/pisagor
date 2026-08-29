import type { EditableSlots } from "@pisagor/recipes/editable";
import { createContext } from "../../internal/utils";

interface EditableContextValue {
  slots: EditableSlots;
}

export const { EditableContext, useEditable } = createContext<EditableContextValue>()({
  name: "Editable",
});
