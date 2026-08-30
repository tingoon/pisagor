import type { EditableRecipe } from "@pisagor/recipes/editable";
import { createContext } from "../../internal/utils";

interface EditableContextValue {
  slots: EditableRecipe;
}

export const { EditableContext, useEditable } = createContext<EditableContextValue>()({
  name: "Editable",
});
