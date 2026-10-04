<script lang="ts">
import { BottomNavigation, ScrollArea } from "@pisagor/svelte";
import BellIcon from "phosphor-svelte/lib/BellIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<div
  class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5"
>
  <ScrollArea>
    <div class="h-96" />
    <BottomNavigation defaultValue="home">
      <BottomNavigation.List class="absolute">
        <BottomNavigation.Item aria-label="Home" value="home">
          <BottomNavigation.ItemIcon>
            <HouseIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item aria-label="Search" value="search">
          <BottomNavigation.ItemIcon>
            <MagnifyingGlassIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item aria-label="News" value="news">
          <BottomNavigation.ItemIcon>
            <BellIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item aria-label="Profile" value="profile">
          <BottomNavigation.ItemIcon>
            <UserIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  </ScrollArea>
</div>
