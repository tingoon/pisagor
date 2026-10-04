import type { ButtonGroupRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface ButtonGroupContextValue {
  slots: ButtonGroupRecipe;
}

const ctx = createContext("ButtonGroup")<ButtonGroupContextValue>();

export const setButtonGroupContext = ctx.setContext;
export const useButtonGroup = ctx.getContext;
