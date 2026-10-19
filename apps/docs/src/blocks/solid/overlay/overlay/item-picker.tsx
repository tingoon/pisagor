/** @jsxImportSource solid-js */

import { Avatar, Button, DropdownMenu, Item } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";
import { itemPickerBlock } from "#/styles/recipes/overlay";

const styles = itemPickerBlock();

export function ItemPicker() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Choose person
          </Button>
        )}
      />
      <Portal>
        <DropdownMenu.Positioner>
          <DropdownMenu.Content class={styles.content()}>
            <For each={people}>
              {(person) => (
                <DropdownMenu.Item value={person.username}>
                  <Item class={styles.item()}>
                    <Item.Media>
                      <Avatar
                        alt=""
                        class={styles.avatar()}
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
              )}
            </For>
          </DropdownMenu.Content>
        </DropdownMenu.Positioner>
      </Portal>
    </DropdownMenu.Root>
  );
}

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
