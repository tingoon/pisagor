import { Slider } from "@pisagor/react";
import { sliderRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSliderRecipe = tv({
  extend: sliderRecipe,
  slots: {
    range: "bg-emerald-600",
    thumb: "border-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return <Slider defaultValue={[40]} recipe={brandSliderRecipe} />;
}
