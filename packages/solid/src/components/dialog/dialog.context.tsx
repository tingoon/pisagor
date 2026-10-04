import type { DialogRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface DialogContextValue {
  modal?: boolean;
  slots: DialogRecipe;
}

export const { DialogContext, useDialog } =
  createContext("Dialog")<DialogContextValue>();
