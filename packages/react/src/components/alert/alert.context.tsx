import type { alertVariants } from "@pisagor/styles/ui/alert";
import { createContext } from "../../utils";

interface AlertContextValue {
  slots: ReturnType<typeof alertVariants>;
}

export const { AlertContext, useAlert } = createContext<AlertContextValue>()({
  name: "Alert",
});
