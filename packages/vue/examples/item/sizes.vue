<script lang="ts" setup>
import { Item } from "@pisagor/vue";

const sizes = ["sm", "md", "lg"] as const;
</script>

<template>
  <div class="flex flex-col gap-2">
    <Item variant="outline" v-for="size in sizes" :key="size" :size="size">
      <Item.Content>
        <Item.Title>Item {{ size }}</Item.Title>
        <Item.Description>An item with title and description.</Item.Description>
      </Item.Content>
    </Item>
  </div>
</template>
