<script lang="ts" setup>
import { PhDotsThree } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Item } from "..";
</script>

<template>
  <Item variant="outline">
    <Item.Content>
      <Item.Title>Basic item</Item.Title>
      <Item.Description>An item with title and description.</Item.Description>
    </Item.Content>
    <Item.Actions>
      <Button size="icon-sm" variant="outline">
        <PhDotsThree />
      </Button>
    </Item.Actions>
  </Item>
</template>
