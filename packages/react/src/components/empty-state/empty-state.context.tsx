import type { EmptyStateRecipe } from "@pisagor/recipes/empty-state";
import { createContext } from "../../internal/utils";

interface EmptyStateContextValue {
  slots: EmptyStateRecipe;
}

export const { EmptyStateContext, useEmptyState } = createContext<EmptyStateContextValue>()({
  name: "EmptyState",
});
