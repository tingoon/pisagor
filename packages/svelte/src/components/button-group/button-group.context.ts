import type { ButtonGroupRecipe } from "@pisagor/recipes/button-group";
import { createContext } from "../../utils/create-context";

export interface ButtonGroupContextValue {
  slots: ButtonGroupRecipe;
}

const ctx = createContext<ButtonGroupContextValue>({ name: "ButtonGroup" });

export const setButtonGroupContext = ctx.setContext;
export const useButtonGroup = ctx.getContext;
