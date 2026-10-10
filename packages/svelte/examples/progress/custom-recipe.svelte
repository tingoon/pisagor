<script lang="ts">
import { progressRecipe } from "@pisagor/recipes";
import { Progress } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandProgressRecipe = tv({
  extend: progressRecipe,
  slots: {
    range: "bg-emerald-600",
    track: "bg-emerald-500/20",
  },
  variants: {},
});

let progress = $state(13);

$effect(() => {
  const timer = setTimeout(() => (progress = 66), 500);
  return () => clearTimeout(timer);
});
</script>

<Progress recipe={brandProgressRecipe} value={progress} />
