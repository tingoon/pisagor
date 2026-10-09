import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useLinkBox,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
