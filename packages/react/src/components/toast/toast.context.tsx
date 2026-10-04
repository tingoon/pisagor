import type { ToastItemRecipe } from "@pisagor/recipes";

import { createContext } from "../../utils";

interface ToastItemContextValue {
  slots: ToastItemRecipe;
}

export const { ToastItemContext, useToastItem } =
  createContext("ToastItem")<ToastItemContextValue>();
