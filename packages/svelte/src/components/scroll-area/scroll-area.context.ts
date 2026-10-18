import { scrollAreaRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useScrollArea,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
