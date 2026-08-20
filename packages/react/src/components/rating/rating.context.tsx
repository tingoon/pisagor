import type { RatingVariants } from "@pisagor/styles/ui/rating";
import { createContext } from "../../utils";

interface RatingContextValue {
  slots: RatingVariants;
}

export const { RatingContext, useRating } = createContext<RatingContextValue>()({
  name: "Rating",
});
