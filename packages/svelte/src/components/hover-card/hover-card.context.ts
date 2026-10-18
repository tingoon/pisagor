import { hoverCardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "HoverCard",
    recipe: hoverCardRecipe,
  });
