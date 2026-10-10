<script lang="ts">
import { numberInputRecipe } from "@pisagor/recipes";
import { NumberInput } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandNumberInputRecipe = tv({
  extend: numberInputRecipe,
  slots: {
    control: "focus-within:border-emerald-600",
    decrementTrigger: "text-emerald-600",
    incrementTrigger: "text-emerald-600",
    input: "caret-emerald-600",
  },
  variants: {},
});
</script>

<NumberInput defaultValue="1" recipe={brandNumberInputRecipe} />
