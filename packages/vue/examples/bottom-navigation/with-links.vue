<script lang="ts" setup>
import {
  PhBell,
  PhHouse,
  PhMagnifyingGlass,
  PhUser,
} from "@phosphor-icons/vue";
import { BottomNavigation, ScrollArea } from "@pisagor/vue";
</script>

<template>
  <div
    class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5"
  >
    <ScrollArea>
      <div class="h-96" />
      <BottomNavigation value="search">
        <BottomNavigation.List class="absolute">
          <BottomNavigation.Item href="https://example.com/" value="home">
            <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item
            href="https://example.com/search"
            value="search"
          >
            <BottomNavigation.ItemIcon>
              <PhMagnifyingGlass />
            </BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item href="https://example.com/news" value="news">
            <BottomNavigation.ItemIcon><PhBell /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item
            href="https://example.com/profile"
            value="profile"
          >
            <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
        </BottomNavigation.List>
      </BottomNavigation>
    </ScrollArea>
  </div>
</template>
