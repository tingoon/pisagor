import type { ToastItemVariants } from "@pisagor/styles/ui/toast";
import { createContext } from "../../utils";

interface ToastItemContextValue {
  slots: ToastItemVariants;
}

export const { ToastItemContext, useToastItem } = createContext<ToastItemContextValue>()({
  name: "ToastItem",
});
