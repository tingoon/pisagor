import { announcementRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useAnnouncement,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
