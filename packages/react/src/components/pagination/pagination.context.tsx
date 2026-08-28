import type { PaginationVariants } from "@pisagor/recipes/pagination";
import { createContext } from "../../internal/utils";

interface PaginationContextValue {
  slots: PaginationVariants;
}

export const { PaginationContext, usePagination } = createContext<PaginationContextValue>()({
  name: "Pagination",
});
