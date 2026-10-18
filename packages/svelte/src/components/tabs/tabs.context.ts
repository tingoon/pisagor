import { tabsRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
