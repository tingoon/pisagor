<script lang="ts" setup>
import {
  PhBell,
  PhHouse,
  PhMagnifyingGlass,
  PhUser,
} from "@phosphor-icons/vue";
import { bottomNavigationRecipe } from "@pisagor/recipes";
import { BottomNavigation, ScrollArea } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandBottomNavigationRecipe = tv({
  extend: bottomNavigationRecipe,
  slots: { list: "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});
</script>

<template>
  <div
    class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5"
  >
    <ScrollArea>
      <div class="h-96" />
      <BottomNavigation
        default-value="home"
        :recipe="brandBottomNavigationRecipe"
      >
        <BottomNavigation.List class="absolute">
          <BottomNavigation.Item value="home">
            <BottomNavigation.ItemIcon>
              <PhHouse />
            </BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item value="search">
            <BottomNavigation.ItemIcon>
              <PhMagnifyingGlass />
            </BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item value="news">
            <BottomNavigation.ItemIcon>
              <PhBell />
            </BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
          <BottomNavigation.Item value="profile">
            <BottomNavigation.ItemIcon>
              <PhUser />
            </BottomNavigation.ItemIcon>
            <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
          </BottomNavigation.Item>
        </BottomNavigation.List>
      </BottomNavigation>
    </ScrollArea>
  </div>
</template>
