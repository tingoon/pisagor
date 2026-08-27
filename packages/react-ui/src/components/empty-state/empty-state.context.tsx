import type { EmptyStateVariants } from "@pisagor/recipes/empty-state";
import { createContext } from "../../utils";

interface EmptyStateContextValue {
  slots: EmptyStateVariants;
}

export const { EmptyStateContext, useEmptyState } = createContext<EmptyStateContextValue>()({
  name: "EmptyState",
});
