import type { ButtonGroupRecipe } from "@pisagor/recipes/button-group";
import { createContext } from "../../utils";

interface ButtonGroupContextValue {
  slots: ButtonGroupRecipe;
}

export const { ButtonGroupContext, useButtonGroup } = createContext<ButtonGroupContextValue>()({
  name: "ButtonGroup",
});
