import type { FieldSlots } from "@pisagor/recipes/field";
import { createContext } from "../../internal/utils";

interface FieldContextValue {
  slots: FieldSlots;
}

export const { FieldContext, useField } = createContext<FieldContextValue>()({
  name: "Field",
});
