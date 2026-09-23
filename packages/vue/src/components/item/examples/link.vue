<script lang="ts" setup >
import { PhArrowSquareOut } from "@phosphor-icons/vue";
import { Item } from "..";
</script>

<template>
        <Item.Group class="gap-2">
          <Item as-child variant="muted">
            <a href="https://example.com/docs">
              <Item.Content>
                <Item.Title>Visit our documentation</Item.Title>
                <Item.Description>Learn how to get started with our components.</Item.Description>
              </Item.Content>
            </a>
          </Item>
          <Item as-child variant="outline">
            <a href="https://example.com/resources" rel="noopener noreferrer" target="_blank">
              <Item.Content>
                <Item.Title>External resource</Item.Title>
                <Item.Description>Opens in a new tab with security attributes.</Item.Description>
              </Item.Content>
              <PhArrowSquareOut />
            </a>
          </Item>
        </Item.Group>
  
</template>
