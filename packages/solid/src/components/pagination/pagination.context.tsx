import type { PaginationRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface PaginationContextValue {
  slots: PaginationRecipe;
}

export const { PaginationContext, usePagination } =
  createContext("Pagination")<PaginationContextValue>();
