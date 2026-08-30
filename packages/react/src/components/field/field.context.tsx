import type { FieldRecipe } from "@pisagor/recipes/field";
import { createContext } from "../../internal/utils";

interface FieldContextValue {
  slots: FieldRecipe;
}

export const { FieldContext, useField } = createContext<FieldContextValue>()({
  name: "Field",
});
