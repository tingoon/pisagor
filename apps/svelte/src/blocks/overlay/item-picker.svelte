<script lang="ts">
import { itemPickerBlock } from "@pisagor/recipes/blocks/overlay";
import { Avatar, Button, DropdownMenu, Item } from "@pisagor/svelte";

const styles = itemPickerBlock();

const people = [
  { email: "jane.doe@example.com", id: "jane", username: "jane.doe" },
  { email: "john.doe@example.com", id: "john", username: "john.doe" },
  { email: "alex.morgan@example.com", id: "alex", username: "alex.morgan" },
];
</script>

<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button variant="outline">Choose person</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class={styles.content()}>
    {#each people as person}
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
    {/each}
  </DropdownMenu.Content>
</DropdownMenu>
