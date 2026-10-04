import type { AlertRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface AlertContextValue {
  slots: AlertRecipe;
}

export const { AlertContext, useAlert } =
  createContext("Alert")<AlertContextValue>();
