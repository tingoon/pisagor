<script lang="ts" setup>
import { PhBell, PhHouse, PhMagnifyingGlass, PhUser } from "@phosphor-icons/vue";
import { ScrollArea } from "@pisagor/vue";
import { BottomNavigation } from "..";
</script>

<template>
  <div class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
    <ScrollArea>
      <div class="h-96" />
      <BottomNavigation default-value="home">
        <BottomNavigation.List class="absolute">
          <BottomNavigation.Item aria-label="Home" value="home">
            <BottomNavigation.ItemIcon><PhHouse /></BottomNavigation.ItemIcon>
          </BottomNavigation.Item>
          <BottomNavigation.Item aria-label="Search" value="search">
            <BottomNavigation.ItemIcon><PhMagnifyingGlass /></BottomNavigation.ItemIcon>
          </BottomNavigation.Item>
          <BottomNavigation.Item aria-label="News" value="news">
            <BottomNavigation.ItemIcon><PhBell /></BottomNavigation.ItemIcon>
          </BottomNavigation.Item>
          <BottomNavigation.Item aria-label="Profile" value="profile">
            <BottomNavigation.ItemIcon><PhUser /></BottomNavigation.ItemIcon>
          </BottomNavigation.Item>
        </BottomNavigation.List>
      </BottomNavigation>
    </ScrollArea>
  </div>
</template>
