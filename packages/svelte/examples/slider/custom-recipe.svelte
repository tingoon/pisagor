<script lang="ts">
import { sliderRecipe } from "@pisagor/recipes";
import { Slider } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSliderRecipe = tv({
  extend: sliderRecipe,
  slots: {
    range: "bg-emerald-600",
    thumb: "border-emerald-600",
  },
  variants: {},
});
</script>

<Slider defaultValue={[40]} recipe={brandSliderRecipe} />
