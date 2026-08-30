import type { ToastItemRecipe } from "@pisagor/recipes/toast";
import { createContext } from "../../internal/utils";

interface ToastItemContextValue {
  slots: ToastItemRecipe;
}

export const { ToastItemContext, useToastItem } = createContext<ToastItemContextValue>()({
  name: "ToastItem",
});
