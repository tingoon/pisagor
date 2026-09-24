import type { EmptyStateRecipe } from "@pisagor/recipes/empty-state";
import { createContext } from "../../utils/create-context";

export interface EmptyStateContextValue {
  slots: EmptyStateRecipe;
}

const ctx = createContext<EmptyStateContextValue>({ name: "EmptyState" });

export const setEmptyStateContext = ctx.setContext;
export const useEmptyState = ctx.getContext;
