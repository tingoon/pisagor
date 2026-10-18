import { dataListItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
