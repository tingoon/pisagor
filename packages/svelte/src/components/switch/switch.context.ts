import type { SwitchRecipe } from "@pisagor/recipes/switch";
import { createContext } from "../../utils/create-context";

export interface SwitchContextValue {
  slots: SwitchRecipe;
}

const ctx = createContext<SwitchContextValue>({ name: "Switch" });

export const setSwitchContext = ctx.setContext;
export const useSwitch = ctx.getContext;
