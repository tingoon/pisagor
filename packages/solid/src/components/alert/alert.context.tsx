import type { AlertRecipe } from "@pisagor/recipes/alert";
import { createContext } from "../../utils";

interface AlertContextValue {
  slots: AlertRecipe;
}

export const { AlertContext, useAlert } = createContext<AlertContextValue>()({
  name: "Alert",
});
