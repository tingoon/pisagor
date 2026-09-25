import type { EditableRecipe } from "@pisagor/recipes/editable";
import { createContext } from "../../utils/create-context";

interface EditableContextValue {
  slots: EditableRecipe;
}

export const { setContext: setEditableContext, getContext: useEditable } =
  createContext<EditableContextValue>({ name: "Editable" });
