<script lang="ts">
import { Avatar, Button, Item } from "@pisagor/svelte";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
import { people } from "./helpers";
</script>

<Item.Group variant="outline">
  {#each people as person}
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
  {/each}
</Item.Group>
