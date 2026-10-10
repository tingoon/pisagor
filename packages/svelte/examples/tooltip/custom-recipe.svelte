<script lang="ts">
import { tooltipRecipe } from "@pisagor/recipes";
import { Button, Tooltip } from "@pisagor/svelte";
import TextBIcon from "phosphor-svelte/lib/TextBIcon";
import { tv } from "tailwind-variants";

const brandTooltipRecipe = tv({
  extend: tooltipRecipe,
  slots: { content: "border-emerald-700 bg-emerald-700 text-white" },
  variants: {},
});
</script>

<Tooltip content="Bold" recipe={brandTooltipRecipe}>
  <Button aria-label="Bold" size="icon-md" variant="outline">
    <TextBIcon />
  </Button>
</Tooltip>
