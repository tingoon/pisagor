import { dropdownMenuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useDropdownMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "DropdownMenu",
  recipe: dropdownMenuRecipe,
});
