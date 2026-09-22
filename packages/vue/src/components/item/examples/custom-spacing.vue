<script setup lang="ts">
import { PhUser } from "@phosphor-icons/vue";
import { Item } from "..";
</script>

<template>
        <Item.Group class="gap-2" variant="outline">
          <Item class="w-full [--space:--spacing(2)]">
            <Item.Media variant="icon">
              <PhUser />
            </Item.Media>
            <Item.Content>
              <Item.Title>Compact spacing</Item.Title>
              <Item.Description>
                Uses `[--space:--spacing(2)]` for tighter padding and gap.
              </Item.Description>
            </Item.Content>
          </Item>
          <Item class="w-full [--space:--spacing(3)] md:[--space:--spacing(5)]">
            <Item.Media variant="icon">
              <PhUser />
            </Item.Media>
            <Item.Content>
              <Item.Title>Responsive spacing</Item.Title>
              <Item.Description>Wider from `md` up with `md:[--space:--spacing(5)]`.</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
  
</template>
