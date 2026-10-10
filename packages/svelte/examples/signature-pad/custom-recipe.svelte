<script lang="ts">
import { signaturePadRecipe } from "@pisagor/recipes";
import { SignaturePad } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSignaturePadRecipe = tv({
  extend: signaturePadRecipe,
  slots: {
    control: "border-emerald-500/40",
    guide: "border-emerald-500/40",
    segment: "fill-emerald-700 dark:fill-emerald-300",
  },
  variants: {},
});
</script>

<SignaturePad recipe={brandSignaturePadRecipe} />
