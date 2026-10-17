import { ratingRecipe } from "@pisagor/recipes";
import { Rating } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandRatingRecipe = tv({
  extend: ratingRecipe,
  slots: { base: "text-emerald-500" },
  variants: {},
});

export function CustomRecipe() {
  return <Rating count={3} defaultValue={3} recipe={brandRatingRecipe} />;
}
