<script module lang="ts">
  import source from "./custom-recipe.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { ratingRecipe } from "@pisagor/recipes";
  import { Rating } from "@pisagor/svelte";
  import { tv } from "tailwind-variants";

  const brandRatingRecipe = tv({
    extend: ratingRecipe,
    slots: { base: "text-emerald-500" },
    variants: {},
  });
</script>

<Rating count={3} defaultValue={3} recipe={brandRatingRecipe} />
