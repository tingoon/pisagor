import { announcementRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Announcement",
  recipe: announcementRecipe,
});
