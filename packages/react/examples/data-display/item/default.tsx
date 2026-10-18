import { DotsThreeIcon } from "@phosphor-icons/react";
import { Button, Item } from "@pisagor/react";
export function Default() {
  return (
    <Item variant="outline">
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
