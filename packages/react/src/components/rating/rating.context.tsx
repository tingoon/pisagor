import type { RatingRecipe } from "@pisagor/recipes/rating";
import { createContext } from "../../utils";

interface RatingContextValue {
  slots: RatingRecipe;
}

export const { RatingContext, useRating } = createContext<RatingContextValue>()({
  name: "Rating",
});
