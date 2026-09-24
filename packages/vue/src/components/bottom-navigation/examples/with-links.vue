<script lang="ts" setup>
import { PhBell, PhHouse, PhMagnifyingGlass, PhUser } from "@phosphor-icons/vue";
import { ScrollArea } from "@pisagor/vue";
import { BottomNavigation } from "..";
</script>

<template>
  <div class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
    <ScrollArea>
      <div class="h-96" />
      <BottomNavigation default-value="/docs">
        <BottomNavigation.List class="absolute">
          <BottomNavigation.Item as-child value="/">
            <a href="https://example.com/">
              <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </a>
          </BottomNavigation.Item>
          <BottomNavigation.Item as-child value="/docs">
            <a href="https://example.com/search">
              <BottomNavigation.ItemIcon><PhMagnifyingGlass /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
            </a>
          </BottomNavigation.Item>
          <BottomNavigation.Item as-child value="/docs/components">
            <a href="https://example.com/news">
              <BottomNavigation.ItemIcon><PhBell /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
            </a>
          </BottomNavigation.Item>
          <BottomNavigation.Item as-child value="/docs/components">
            <a href="https://example.com/profile">
              <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
            </a>
          </BottomNavigation.Item>
        </BottomNavigation.List>
      </BottomNavigation>
    </ScrollArea>
  </div>
</template>
