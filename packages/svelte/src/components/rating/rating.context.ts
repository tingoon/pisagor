import type { RatingRecipe } from "@pisagor/recipes/rating";
import { createContext } from "../../utils/create-context";

export interface RatingContextValue {
  slots: RatingRecipe;
}

const ctx = createContext<RatingContextValue>({ name: "Rating" });

export const setRatingContext = ctx.setContext;
export const useRating = ctx.getContext;
