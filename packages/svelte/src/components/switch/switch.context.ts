import type { SwitchRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface SwitchContextValue {
  slots: SwitchRecipe;
}

const ctx = createContext("Switch")<SwitchContextValue>();

export const setSwitchContext = ctx.setContext;
