import type { ButtonGroupVariants } from "@pisagor/recipes/button-group";
import { createContext } from "../../utils";

interface ButtonGroupContextValue {
  slots: ButtonGroupVariants;
}

export const { ButtonGroupContext, useButtonGroup } = createContext<ButtonGroupContextValue>()({
  name: "ButtonGroup",
});
