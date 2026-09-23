import { CaretRightIcon, SealCheckIcon } from "@phosphor-icons/react";
import { Item } from "..";

export function WithMedia() {
  return (
    <Item variant="outline">
      <Item.Media>
        <SealCheckIcon className="size-5" />
      </Item.Media>
      <Item.Content>
        <Item.Title>Your profile has been verified.</Item.Title>
      </Item.Content>
      <Item.Actions>
        <CaretRightIcon className="size-4" />
      </Item.Actions>
    </Item>
  );
}
