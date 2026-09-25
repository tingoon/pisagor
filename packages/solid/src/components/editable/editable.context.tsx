import type { EditableRecipe } from "@pisagor/recipes/editable";
import { createContext } from "../../utils";

interface EditableContextValue {
  slots: EditableRecipe;
}

export const { EditableContext, useEditable } = createContext<EditableContextValue>()({
  name: "Editable",
});
