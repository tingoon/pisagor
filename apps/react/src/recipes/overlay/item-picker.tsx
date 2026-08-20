import { Avatar, Button, DropdownMenu, Item } from "@pisagor/react";

export function ItemPicker() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-72">
        {people.map((person) => (
          <DropdownMenu.Item key={person.id} value={person.username}>
            <Item className="[--space:--spacing(2)]">
              <Item.Media>
                <Avatar
                  alt=""
                  className="grayscale"
                  fallback={person.username.charAt(0).toUpperCase()}
                  size="sm"
                />
              </Item.Media>
              <Item.Content>
                <Item.Title>{person.username}</Item.Title>
                <Item.Description>{person.email}</Item.Description>
              </Item.Content>
            </Item>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
