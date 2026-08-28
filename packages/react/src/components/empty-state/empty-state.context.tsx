import type { EmptyStateVariants } from "@pisagor/recipes/empty-state";
import { createContext } from "../../internal/utils";

interface EmptyStateContextValue {
  slots: EmptyStateVariants;
}

export const { EmptyStateContext, useEmptyState } = createContext<EmptyStateContextValue>()({
  name: "EmptyState",
});
