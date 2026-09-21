import type { FieldRecipe } from "@pisagor/recipes/field";
import { fieldRecipe } from "@pisagor/recipes/field";
import { createContext } from "../../utils";

interface FieldContextValue {
  slots: FieldRecipe;
}

export const { FieldContext, useField } = createContext<FieldContextValue>()({
  name: "Field",
  strict: false,
});

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  return useField()?.slots ?? recipe();
}
