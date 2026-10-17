import { TextBIcon } from "@phosphor-icons/react";
import { Button, Tooltip } from "@pisagor/react";
import { tooltipRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandTooltipRecipe = tv({
  extend: tooltipRecipe,
  slots: { content: "border-emerald-700 bg-emerald-700 text-white" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Tooltip content="Bold" recipe={brandTooltipRecipe}>
      {
        <Button aria-label="Bold" size="icon-md" variant="outline">
          <TextBIcon />
        </Button>
      }
    </Tooltip>
  );
}
