<script lang="ts">
import { spinnerRecipe } from "@pisagor/recipes";
import { Spinner } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSpinnerRecipe = tv({
  base: ["text-emerald-600"],
  extend: spinnerRecipe,
});
</script>

<Spinner recipe={brandSpinnerRecipe} />
