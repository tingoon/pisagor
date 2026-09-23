import { PlusIcon } from "@phosphor-icons/react";
import { Avatar, Button } from "@pisagor/react";
import { Item } from "..";
import { people } from "./helpers";
export function Group() {
  return (
    <Item.Group variant="outline">
      {people.map((person) => (
        <Item key={person.id}>
          <Item.Media>
            <Avatar className="grayscale" fallback={person.username.charAt(0).toUpperCase()} />
          </Item.Media>
          <Item.Content>
            <Item.Title>{person.username}</Item.Title>
            <Item.Description>{person.email}</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button aria-label="Add" className="rounded-full" size="icon-md" variant="ghost">
              <PlusIcon />
            </Button>
          </Item.Actions>
        </Item>
      ))}
    </Item.Group>
  );
}
