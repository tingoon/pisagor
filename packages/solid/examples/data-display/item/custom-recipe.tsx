import { itemRecipe } from "@pisagor/recipes";
import { Button, Item } from "@pisagor/solid";
import { DotsThreeIcon } from "@pisagor/solid/icons";
import { tv } from "tailwind-variants";

const brandItemRecipe = tv({
  extend: itemRecipe,
  slots: {
    base: "rounded-xl",
    title: "text-emerald-900 dark:text-emerald-100",
  },
  variants: {
    variant: {
      default: { base: "border-emerald-500/40 bg-emerald-500/5" },
    },
  },
});

export function CustomRecipe() {
  return (
    <Item recipe={brandItemRecipe} variant="outline">
      <Item.Content>
        <Item.Title>Basic item</Item.Title>
        <Item.Description>An item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button aria-label="More options" size="icon-sm" variant="outline">
          <DotsThreeIcon />
        </Button>
      </Item.Actions>
    </Item>
  );
}
