import type { DialogRecipe } from "@pisagor/recipes/dialog";
import { createContext } from "../../utils/create-context";

export interface DialogContextValue {
  modal: boolean;
  slots: DialogRecipe;
}

const ctx = createContext<DialogContextValue>({ name: "Dialog" });
export const setDialogContext = ctx.setContext;
export const useDialog = ctx.getContext;
