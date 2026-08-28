import type { RatingVariants } from "@pisagor/recipes/rating";
import { createContext } from "../../internal/utils";

interface RatingContextValue {
  slots: RatingVariants;
}

export const { RatingContext, useRating } = createContext<RatingContextValue>()({
  name: "Rating",
});
