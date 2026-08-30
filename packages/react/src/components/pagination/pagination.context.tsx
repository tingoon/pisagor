import type { PaginationRecipe } from "@pisagor/recipes/pagination";
import { createContext } from "../../internal/utils";

interface PaginationContextValue {
  slots: PaginationRecipe;
}

export const { PaginationContext, usePagination } = createContext<PaginationContextValue>()({
  name: "Pagination",
});
