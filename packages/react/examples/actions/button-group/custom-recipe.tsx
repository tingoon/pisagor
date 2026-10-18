import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { Button, ButtonGroup } from "@pisagor/react";
import { buttonGroupRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandButtonGroupRecipe = tv({
  extend: buttonGroupRecipe,
  slots: { separator: "bg-emerald-500/60" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <ButtonGroup recipe={brandButtonGroupRecipe}>
      <Button aria-label="Remove" size="icon-md" variant="secondary">
        <MinusIcon />
      </Button>
      <ButtonGroup.Separator />
      <Button aria-label="Add" size="icon-md" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  );
}
