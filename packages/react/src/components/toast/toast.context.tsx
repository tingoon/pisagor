import type { ToastItemSlots } from "@pisagor/recipes/toast";
import { createContext } from "../../internal/utils";

interface ToastItemContextValue {
  slots: ToastItemSlots;
}

export const { ToastItemContext, useToastItem } = createContext<ToastItemContextValue>()({
  name: "ToastItem",
});
