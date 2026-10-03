/** @jsxImportSource solid-js */

import { Button } from "@pisagor/solid";
import { ShieldWarningIcon } from "@pisagor/solid/icons";
import { Item } from "@pisagor/solid/item";
export function Icon() {
  return (
    <Item variant="outline">
      <Item.Media variant="icon">
        <ShieldWarningIcon />
      </Item.Media>
      <Item.Content>
        <Item.Title>Security alert</Item.Title>
        <Item.Description>
          New login detected from unknown device.
        </Item.Description>
      </Item.Content>
      <Item.Actions>
        <Button size="sm" variant="outline">
          Review
        </Button>
      </Item.Actions>
    </Item>
  );
}
