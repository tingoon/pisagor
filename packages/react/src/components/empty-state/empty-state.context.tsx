import type { EmptyStateSlots } from "@pisagor/recipes/empty-state";
import { createContext } from "../../internal/utils";

interface EmptyStateContextValue {
  slots: EmptyStateSlots;
}

export const { EmptyStateContext, useEmptyState } = createContext<EmptyStateContextValue>()({
  name: "EmptyState",
});
