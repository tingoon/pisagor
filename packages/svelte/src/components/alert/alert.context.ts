import type { AlertRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface AlertContextValue {
  slots: AlertRecipe;
}

const ctx = createContext("Alert")<AlertContextValue>();

export const setAlertContext = ctx.setContext;
export const useAlert = ctx.getContext;
