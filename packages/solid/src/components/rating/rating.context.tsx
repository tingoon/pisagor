import type { RatingRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface RatingContextValue {
  slots: RatingRecipe;
}

export const { RatingContext, useRating } =
  createContext("Rating")<RatingContextValue>();
