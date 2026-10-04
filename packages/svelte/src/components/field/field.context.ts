import { type FieldRecipe, fieldRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface FieldContextValue {
  slots: FieldRecipe;
}

const ctx = createContext("Field")<FieldContextValue | undefined>({
  defaultValue: undefined,
  strict: false,
});

export const setFieldContext = ctx.setContext;
export const useField = ctx.getContext;

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  return useField()?.slots ?? recipe();
}
