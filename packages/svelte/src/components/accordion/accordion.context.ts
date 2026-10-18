import { accordionItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useAccordionItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
