import type { ToastItemRecipe } from "@pisagor/recipes/toast";
import { createContext } from "../../utils/create-context";

interface ToastItemContextValue {
  slots: ToastItemRecipe;
}

export const { setContext: setToastItemContext, getContext: useToastItem } =
  createContext<ToastItemContextValue>({ name: "ToastItem" });
