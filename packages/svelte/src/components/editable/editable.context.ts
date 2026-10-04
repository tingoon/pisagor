import type { EditableRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface EditableContextValue {
  slots: EditableRecipe;
}

export const { setContext: setEditableContext, getContext: useEditable } =
  createContext("Editable")<EditableContextValue>();
