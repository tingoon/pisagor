import { menuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});

/** Context key: true inside `Menu.List`, so separators render as `<li>`. */
export const MENU_INSIDE_LIST = Symbol("MenuInsideList");
