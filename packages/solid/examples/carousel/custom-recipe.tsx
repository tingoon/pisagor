import { carouselRecipe } from "@pisagor/recipes";
import { Carousel } from "@pisagor/solid";
import { tv } from "tailwind-variants";
import { numberedSlides } from "./helpers";

const brandCarouselRecipe = tv({
  extend: carouselRecipe,
  slots: { indicator: "bg-emerald-600" },
  variants: {},
});

export function CustomRecipe() {
  return <Carousel recipe={brandCarouselRecipe} slides={numberedSlides(8)} />;
}
