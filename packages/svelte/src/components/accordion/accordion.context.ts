import { accordionItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useAccordionItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
