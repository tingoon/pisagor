import type { DialogRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface DialogContextValue {
  modal: boolean;
  slots: DialogRecipe;
}

const ctx = createContext("Dialog")<DialogContextValue>();
export const setDialogContext = ctx.setContext;
export const useDialog = ctx.getContext;
