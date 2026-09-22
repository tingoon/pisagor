<script setup lang="ts">
import { PhPlus } from "@phosphor-icons/vue";

import { Avatar, Button } from "@pisagor/vue";
import { Item } from "..";
import { people } from "./helpers";
</script>

<template>
        <Item.Group variant="outline">
          <Item v-for="person in people" :key="person.id">
            <Item.Media>
              <Avatar class="grayscale" :fallback="person.username.charAt(0).toUpperCase()" />
            </Item.Media>
            <Item.Content>
              <Item.Title>{{ person.username }}</Item.Title>
              <Item.Description>{{ person.email }}</Item.Description>
            </Item.Content>
            <Item.Actions>
              <Button class="rounded-full" size="icon-md" variant="ghost">
                <PhPlus />
              </Button>
            </Item.Actions>
          </Item>
        </Item.Group>
  
</template>
