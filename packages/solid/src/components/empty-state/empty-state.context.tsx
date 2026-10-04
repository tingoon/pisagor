import type { EmptyStateRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface EmptyStateContextValue {
  slots: EmptyStateRecipe;
}

export const { EmptyStateContext, useEmptyState } =
  createContext("EmptyState")<EmptyStateContextValue>();
