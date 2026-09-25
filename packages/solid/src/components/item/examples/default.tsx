import { Button } from "../../button";
import { Item } from "../index";

export function Default() {
  return (
    <Item variant="outline">
      <Item.Content>
        <Item.Title>Basic item</Item.Title>
        <Item.Description>An item with title and description.</Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button aria-label="More options" size="icon-sm" variant="outline">
          ···
        </Button>
      </Item.Actions>
    </Item>
  );
}
