import { Spinner } from "@pisagor/react";
import { spinnerRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSpinnerRecipe = tv({
  base: ["text-emerald-600"],
  extend: spinnerRecipe,
});

export function CustomRecipe() {
  return <Spinner recipe={brandSpinnerRecipe} />;
}
