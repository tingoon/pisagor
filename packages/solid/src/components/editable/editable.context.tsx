import type { EditableRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface EditableContextValue {
  slots: EditableRecipe;
}

export const { EditableContext, useEditable } =
  createContext("Editable")<EditableContextValue>();
