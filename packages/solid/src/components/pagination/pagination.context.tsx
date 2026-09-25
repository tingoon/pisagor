import type { PaginationRecipe } from "@pisagor/recipes/pagination";
import { createContext } from "../../utils";

interface PaginationContextValue {
  slots: PaginationRecipe;
}

export const { PaginationContext, usePagination } = createContext<PaginationContextValue>()({
  name: "Pagination",
});
