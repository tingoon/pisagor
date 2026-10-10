<script lang="ts">
import { alertRecipe } from "@pisagor/recipes";
import { Alert } from "@pisagor/svelte";
import CheckCircleIcon from "phosphor-svelte/lib/CheckCircleIcon";
import { tv } from "tailwind-variants";

const brandAlertRecipe = tv({
  extend: alertRecipe,
  slots: {
    base: "rounded-xl",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {
    variant: {
      default: {
        base: [
          "border-emerald-500/40 bg-emerald-500/5",
          "[&_svg]:text-emerald-600",
        ],
      },
    },
  },
});
</script>

<Alert
  description="Your workspace is ready to use."
  recipe={brandAlertRecipe}
  title="Workspace created"
>
  {#snippet icon()}
    <CheckCircleIcon />
  {/snippet}
</Alert>
