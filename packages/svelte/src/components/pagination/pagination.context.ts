import type { PaginationRecipe } from "@pisagor/recipes/pagination";
import { createContext } from "../../utils/create-context";

interface PaginationContextValue {
  slots: PaginationRecipe;
}

export const { setContext: setPaginationContext, getContext: usePagination } =
  createContext<PaginationContextValue>({ name: "Pagination" });
