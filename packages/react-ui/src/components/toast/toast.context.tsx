import type { ToastItemVariants } from "@pisagor/recipes/toast";
import { createContext } from "../../utils";

interface ToastItemContextValue {
  slots: ToastItemVariants;
}

export const { ToastItemContext, useToastItem } = createContext<ToastItemContextValue>()({
  name: "ToastItem",
});
