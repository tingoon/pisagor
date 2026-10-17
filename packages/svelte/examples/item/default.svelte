<script module lang="ts">
  import source from "./default.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Item } from "@pisagor/svelte";
</script>

<Item>
  <Item.Media variant="icon">★</Item.Media>
  <Item.Content>
    <Item.Title>Item title</Item.Title>
    <Item.Description>Item description</Item.Description>
  </Item.Content>
</Item>
