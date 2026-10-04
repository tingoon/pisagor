import { type FieldRecipe, fieldRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface FieldContextValue {
  slots: FieldRecipe;
}

export const { FieldContext, useField } = createContext(
  "Field",
)<FieldContextValue>({ strict: false });

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  return useField()?.slots ?? recipe();
}
