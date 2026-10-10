<script lang="ts">
import { toggleRecipe } from "@pisagor/recipes";
import { Toggle } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandToggleRecipe = tv({
  base: ["data-[state=on]:bg-emerald-600 data-[state=on]:text-white"],
  extend: toggleRecipe,
});
</script>

<Toggle defaultPressed recipe={brandToggleRecipe}> Bold </Toggle>
