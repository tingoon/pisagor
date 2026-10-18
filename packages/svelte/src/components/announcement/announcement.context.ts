import { announcementRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useAnnouncement,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
