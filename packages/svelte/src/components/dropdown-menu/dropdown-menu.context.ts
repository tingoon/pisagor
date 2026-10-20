import { dropdownMenuItemRecipe, dropdownMenuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "DropdownMenu",
    recipe: dropdownMenuRecipe,
  });

export const { withContext: withItemContext, withProvider: withItemProvider } =
  createSlotRecipeContext({
    name: "DropdownMenu",
    recipe: dropdownMenuItemRecipe,
  });
