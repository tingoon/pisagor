import { CircularSlider } from "@pisagor/react";
import { circularSliderRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandCircularSliderRecipe = tv({
  extend: circularSliderRecipe,
  slots: {
    marker:
      "data-[state=at-value]:before:bg-emerald-600 data-[state=under-value]:before:bg-emerald-600",
    ringRange: "stroke-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <CircularSlider recipe={brandCircularSliderRecipe}>
      <CircularSlider.ValueText suffix="°" />
    </CircularSlider>
  );
}
