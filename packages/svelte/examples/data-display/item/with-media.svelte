<script lang="ts">
  import { Item } from "@pisagor/svelte";
  import { CaretRightIcon, SealCheckIcon } from "phosphor-svelte";
</script>

<Item variant="outline">
  <Item.Media>
    <SealCheckIcon class="size-5" />
  </Item.Media>
  <Item.Content>
    <Item.Title>Your profile has been verified.</Item.Title>
  </Item.Content>
  <Item.Actions>
    <CaretRightIcon class="size-4" />
  </Item.Actions>
</Item>
