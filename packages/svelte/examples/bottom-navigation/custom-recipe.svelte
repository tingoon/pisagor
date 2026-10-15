<script lang="ts">
import { bottomNavigationRecipe } from "@pisagor/recipes";
import { BottomNavigation, ScrollArea } from "@pisagor/svelte";
import BellIcon from "phosphor-svelte/lib/BellIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";
import { tv } from "tailwind-variants";

const brandBottomNavigationRecipe = tv({
  extend: bottomNavigationRecipe,
  slots: { list: "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});
</script>

<div
  class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5"
>
  <ScrollArea>
    <div class="h-96"></div>
    <BottomNavigation recipe={brandBottomNavigationRecipe} value="home">
      <BottomNavigation.List class="absolute">
        <BottomNavigation.Item href="#home" value="home">
          <BottomNavigation.ItemIcon>
            <HouseIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="#search" value="search">
          <BottomNavigation.ItemIcon>
            <MagnifyingGlassIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="#news" value="news">
          <BottomNavigation.ItemIcon>
            <BellIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="#profile" value="profile">
          <BottomNavigation.ItemIcon>
            <UserIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  </ScrollArea>
</div>
