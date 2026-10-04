import type { ButtonGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface ButtonGroupContextValue {
  slots: ButtonGroupRecipe;
}

export const { ButtonGroupContext, useButtonGroup } =
  createContext("ButtonGroup")<ButtonGroupContextValue>();
