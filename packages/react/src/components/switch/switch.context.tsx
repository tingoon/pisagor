import type { SwitchRecipe } from "@pisagor/recipes/switch";
import { createContext } from "../../internal/utils";

interface SwitchContextValue {
  slots: SwitchRecipe;
}

export const { SwitchContext, useSwitch } = createContext<SwitchContextValue>()({
  name: "Switch",
});
