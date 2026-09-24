<script lang="ts" setup>
import { PhCaretRight, PhSealCheck } from "@phosphor-icons/vue";
import { Item } from "..";
</script>

<template>
  <Item variant="outline">
    <Item.Media>
      <PhSealCheck class="size-5" />
    </Item.Media>
    <Item.Content>
      <Item.Title>Your profile has been verified.</Item.Title>
    </Item.Content>
    <Item.Actions>
      <PhCaretRight class="size-4" />
    </Item.Actions>
  </Item>
</template>
