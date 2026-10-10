<script lang="ts">
import { circularSliderRecipe } from "@pisagor/recipes";
import { CircularSlider } from "@pisagor/svelte";
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
</script>

<CircularSlider recipe={brandCircularSliderRecipe}>
  <CircularSlider.ValueText suffix="°" />
</CircularSlider>
