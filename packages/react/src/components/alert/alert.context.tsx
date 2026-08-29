import type { AlertSlots } from "@pisagor/recipes/alert";
import { createContext } from "../../internal/utils";

interface AlertContextValue {
  slots: AlertSlots;
}

export const { AlertContext, useAlert } = createContext<AlertContextValue>()({
  name: "Alert",
});
