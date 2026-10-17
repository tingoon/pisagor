<script lang="ts">
  import { Item } from "@pisagor/svelte";

  const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size (size)}
    <Item {size} variant="outline">
      <Item.Content>
        <Item.Title>Item {size}</Item.Title>
        <Item.Description>An item with title and description.</Item.Description>
      </Item.Content>
    </Item>
  {/each}
</div>
