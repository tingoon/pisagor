<script setup lang="ts">
import { Avatar, Button } from "@pisagor/vue";
import { Item } from "..";
</script>

<template>
        <Item variant="outline">
          <Item.Media>
            <Avatar alt="jane.doe@example.com" fallback="JD" size="sm" />
          </Item.Media>
          <Item.Content>
            <Item.Title>Jane Doe</Item.Title>
            <Item.Description>Last seen 5 months ago</Item.Description>
          </Item.Content>
          <Item.Actions>
            <Button size="sm" variant="outline">
              View
            </Button>
          </Item.Actions>
        </Item>
  
</template>
