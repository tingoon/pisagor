import { paginationRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: usePagination,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
