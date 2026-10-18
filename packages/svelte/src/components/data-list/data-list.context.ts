import { dataListItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useDataListItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "DataList",
  recipe: dataListItemRecipe,
});
