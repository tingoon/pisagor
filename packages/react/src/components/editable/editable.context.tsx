import type { EditableVariants } from "@pisagor/styles/ui/editable";
import { createContext } from "../../utils";

interface EditableContextValue {
  slots: EditableVariants;
}

export const { EditableContext, useEditable } = createContext<EditableContextValue>()({
  name: "Editable",
});
