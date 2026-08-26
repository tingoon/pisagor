import type { PaginationVariants } from "@pisagor/styles/ui/pagination";
import { createContext } from "../../utils";

interface PaginationContextValue {
  slots: PaginationVariants;
}

export const { PaginationContext, usePagination } = createContext<PaginationContextValue>()({
  name: "Pagination",
});
