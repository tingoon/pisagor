import type { PaginationRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

interface PaginationContextValue {
  slots: PaginationRecipe;
}

export const { setContext: setPaginationContext, getContext: usePagination } =
  createContext("Pagination")<PaginationContextValue>();
