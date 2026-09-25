import { UserIcon } from "@phosphor-icons/react";
import { Item } from "..";

export function CustomSpacing() {
  return (
    <Item.Group className="gap-2" variant="outline">
      <Item className="w-full [--space:--spacing(2)]">
        <Item.Media variant="icon">
          <UserIcon />
        </Item.Media>
        <Item.Content>
          <Item.Title>Compact spacing</Item.Title>
          <Item.Description>
            Uses `[--space:--spacing(2)]` for tighter padding and gap.
          </Item.Description>
        </Item.Content>
      </Item>
      <Item className="w-full [--space:--spacing(3)] md:[--space:--spacing(5)]">
        <Item.Media variant="icon">
          <UserIcon />
        </Item.Media>
        <Item.Content>
          <Item.Title>Responsive spacing</Item.Title>
          <Item.Description>
            Wider from `md` up with `md:[--space:--spacing(5)]`.
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}
