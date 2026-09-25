import type { DialogRecipe } from "@pisagor/recipes/dialog";
import { createContext } from "../../utils";

interface DialogContextValue {
  modal?: boolean;
  slots: DialogRecipe;
}

export const { DialogContext, useDialog } = createContext<DialogContextValue>()(
  {
    name: "Dialog",
  },
);
