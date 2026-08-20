import type { alertVariants } from "@pisagor/styles/ui/alert";
import { createContext } from "../../utils";

interface AlertContextValue {
  slots: ReturnType<typeof alertVariants>;
}

const [AlertContext, useAlertContext] = createContext<AlertContextValue>({
  name: "Alert",
});

export { AlertContext, useAlertContext };
