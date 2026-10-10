<script lang="ts">
import { circularProgressRecipe } from "@pisagor/recipes";
import { CircularProgress } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandCircularProgressRecipe = tv({
  extend: circularProgressRecipe,
  slots: { range: "stroke-emerald-600" },
  variants: {},
});

let progress = $state(24);

$effect(() => {
  const timer = setTimeout(() => (progress = 72), 500);
  return () => clearTimeout(timer);
});
</script>

<CircularProgress recipe={brandCircularProgressRecipe} value={progress} />
