import type { ButtonGroupSlots } from "@pisagor/recipes/button-group";
import { createContext } from "../../internal/utils";

interface ButtonGroupContextValue {
  slots: ButtonGroupSlots;
}

export const { ButtonGroupContext, useButtonGroup } = createContext<ButtonGroupContextValue>()({
  name: "ButtonGroup",
});
