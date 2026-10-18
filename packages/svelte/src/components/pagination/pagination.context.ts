import { paginationRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "Pagination",
    recipe: paginationRecipe,
  });
