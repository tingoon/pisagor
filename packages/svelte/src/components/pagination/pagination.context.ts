import { paginationRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: usePagination,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Pagination",
  recipe: paginationRecipe,
});
