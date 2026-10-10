<script lang="ts">
import { inputRecipe } from "@pisagor/recipes";
import { Input } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandInputRecipe = tv({
  extend: inputRecipe,
  slots: {
    clearableRoot: "caret-emerald-600",
  },
  variants: {},
});

let value = $state("Pisagor");
</script>

<Input
  clearable
  onValueChange={(next) => (value = next)}
  recipe={brandInputRecipe}
  {value}
/>
