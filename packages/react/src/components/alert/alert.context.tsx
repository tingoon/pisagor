import type { AlertVariants } from "@pisagor/recipes/alert";
import { createContext } from "../../internal/utils";

interface AlertContextValue {
  slots: AlertVariants;
}

export const { AlertContext, useAlert } = createContext<AlertContextValue>()({
  name: "Alert",
});
