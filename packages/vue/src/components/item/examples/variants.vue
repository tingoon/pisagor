<script lang="ts" setup >
import { Item } from "..";
</script>

<template>
        <Item.Group class="gap-2">
          <Item variant="default">
            <Item.Content>
              <Item.Title>Default variant</Item.Title>
              <Item.Description>Transparent background with no border.</Item.Description>
            </Item.Content>
          </Item>
          <Item variant="muted">
            <Item.Content>
              <Item.Title>Muted variant</Item.Title>
              <Item.Description>Muted background for secondary content.</Item.Description>
            </Item.Content>
          </Item>
          <Item variant="outline">
            <Item.Content>
              <Item.Title>Outline variant</Item.Title>
              <Item.Description>Outlined style with a visible border.</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
  
</template>
