import type { SwitchRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface SwitchContextValue {
  slots: SwitchRecipe;
}

export const { SwitchContext, useSwitch } =
  createContext("Switch")<SwitchContextValue>();
