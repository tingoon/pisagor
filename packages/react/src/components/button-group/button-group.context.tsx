import type { ButtonGroupVariants } from "@pisagor/styles/ui/button-group";
import { createContext } from "../../utils";

interface ButtonGroupContextValue {
  slots: ButtonGroupVariants;
}

export const { ButtonGroupContext, useButtonGroup } = createContext<ButtonGroupContextValue>()({
  name: "ButtonGroup",
});
