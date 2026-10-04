import type { EmptyStateRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface EmptyStateContextValue {
  slots: EmptyStateRecipe;
}

const ctx = createContext("EmptyState")<EmptyStateContextValue>();

export const setEmptyStateContext = ctx.setContext;
export const useEmptyState = ctx.getContext;
