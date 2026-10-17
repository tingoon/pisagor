import { Avatar, Button, Item } from "@pisagor/solid";
import { PlusIcon } from "@pisagor/solid/icons";
import { people } from "./helpers";
export function Group() {
  return (
    <Item.Group variant="outline">
      {people.map((person) => (
        <Item>
          <Item.Media>
            <Avatar
              class="grayscale"
              fallback={person.username.charAt(0).toUpperCase()}
            />
          </Item.Media>
          <Item.Content>
            <Item.Title>{person.username}</Item.Title>
            <Item.Description>{person.email}</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button
              aria-label="Add"
              class="rounded-full"
              size="icon-md"
              variant="ghost"
            >
              <PlusIcon />
            </Button>
          </Item.Actions>
        </Item>
      ))}
    </Item.Group>
  );
}
