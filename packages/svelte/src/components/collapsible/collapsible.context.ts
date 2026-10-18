import { collapsibleRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "Collapsible",
    recipe: collapsibleRecipe,
  });
