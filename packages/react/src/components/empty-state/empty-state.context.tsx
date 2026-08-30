import type { EmptyStateRecipe } from "@pisagor/recipes/empty-state";
import { createContext } from "../../utils";

interface EmptyStateContextValue {
  slots: EmptyStateRecipe;
}

export const { EmptyStateContext, useEmptyState } = createContext<EmptyStateContextValue>()({
  name: "EmptyState",
});
