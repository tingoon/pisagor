import type { AlertRecipe } from "@pisagor/recipes/alert";
import { createContext } from "../../internal/utils";

interface AlertContextValue {
  slots: AlertRecipe;
}

export const { AlertContext, useAlert } = createContext<AlertContextValue>()({
  name: "Alert",
});
