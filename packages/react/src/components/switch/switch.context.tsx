import type { SwitchVariants } from "@pisagor/styles/ui/switch";
import { createContext } from "../../utils";

interface SwitchContextValue {
  slots: SwitchVariants;
}

export const { SwitchContext, useSwitch } = createContext<SwitchContextValue>()({
  name: "Switch",
});
