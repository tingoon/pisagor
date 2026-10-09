import { dataListItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useDataListItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
