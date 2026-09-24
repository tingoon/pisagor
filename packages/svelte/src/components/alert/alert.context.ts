import type { AlertRecipe } from "@pisagor/recipes/alert";
import { createContext } from "../../utils/create-context";

export interface AlertContextValue {
  slots: AlertRecipe;
}

const ctx = createContext<AlertContextValue>({ name: "Alert" });

export const setAlertContext = ctx.setContext;
export const useAlert = ctx.getContext;
