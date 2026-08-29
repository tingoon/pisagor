import type { RatingSlots } from "@pisagor/recipes/rating";
import { createContext } from "../../internal/utils";

interface RatingContextValue {
  slots: RatingSlots;
}

export const { RatingContext, useRating } = createContext<RatingContextValue>()({
  name: "Rating",
});
