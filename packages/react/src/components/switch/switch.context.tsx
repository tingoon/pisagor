import type { SwitchSlots } from "@pisagor/recipes/switch";
import { createContext } from "../../internal/utils";

interface SwitchContextValue {
  slots: SwitchSlots;
}

export const { SwitchContext, useSwitch } = createContext<SwitchContextValue>()({
  name: "Switch",
});
