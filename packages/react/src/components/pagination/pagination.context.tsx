import type { PaginationSlots } from "@pisagor/recipes/pagination";
import { createContext } from "../../internal/utils";

interface PaginationContextValue {
  slots: PaginationSlots;
}

export const { PaginationContext, usePagination } = createContext<PaginationContextValue>()({
  name: "Pagination",
});
