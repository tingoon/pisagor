import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useLinkBox,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
