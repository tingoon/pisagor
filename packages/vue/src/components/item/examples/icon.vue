<script lang="ts" setup>
import { PhShieldWarning } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { Item } from "..";
</script>

<template>
  <Item variant="outline">
    <Item.Media variant="icon">
      <PhShieldWarning />
    </Item.Media>
    <Item.Content>
      <Item.Title>Security alert</Item.Title>
      <Item.Description>New login detected from unknown device.</Item.Description>
    </Item.Content>
    <Item.Actions>
      <Button size="sm" variant="outline"> Review </Button>
    </Item.Actions>
  </Item>
</template>
