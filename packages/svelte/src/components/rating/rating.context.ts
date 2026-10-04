import type { RatingRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface RatingContextValue {
  slots: RatingRecipe;
}

const ctx = createContext("Rating")<RatingContextValue>();

export const setRatingContext = ctx.setContext;
