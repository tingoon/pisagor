<script lang="ts">
import { carouselRecipe } from "@pisagor/recipes";
import { Carousel } from "@pisagor/svelte";
import { tv } from "tailwind-variants";
import { numberedSlides } from "./helpers";

const brandCarouselRecipe = tv({
  extend: carouselRecipe,
  slots: { indicator: "bg-emerald-600" },
  variants: {},
});
</script>

<Carousel recipe={brandCarouselRecipe} slides={numberedSlides(8)} />
