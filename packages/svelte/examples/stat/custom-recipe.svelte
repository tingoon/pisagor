<script lang="ts">
import { statRecipe } from "@pisagor/recipes";
import { Stat } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandStatRecipe = tv({
  extend: statRecipe,
  slots: {
    base: "rounded-xl",
    value: "text-emerald-700 dark:text-emerald-300",
  },
  variants: {
    variant: {
      default: { base: "border-emerald-500/40 bg-emerald-500/5" },
    },
  },
});
</script>

<Stat
  description="Updated 2 minutes ago"
  label="Monthly recurring revenue"
  recipe={brandStatRecipe}
  value="$124,320"
/>
