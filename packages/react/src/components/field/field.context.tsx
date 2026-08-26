import type { FieldVariants } from "@pisagor/recipes/field";
import { createContext } from "../../utils";

interface FieldContextValue {
  slots: FieldVariants;
}

export const { FieldContext, useField } = createContext<FieldContextValue>()({
  name: "Field",
});
