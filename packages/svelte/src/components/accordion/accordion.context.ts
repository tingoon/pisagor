import { accordionItemRecipe, accordionRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context: AccordionStylesContext,
  withProvider: withAccordionProvider,
} = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionRecipe,
});

export const {
  Context,
  useStyles,
  withContext,
  withProvider: withItemProvider,
} = createSlotRecipeContext({
  name: "Accordion",
  recipe: accordionItemRecipe,
});
