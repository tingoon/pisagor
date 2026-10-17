<script lang="ts">
  import { BottomNavigation, ScrollArea } from "@pisagor/svelte";
  import BellIcon from "phosphor-svelte/lib/BellIcon";
  import HouseIcon from "phosphor-svelte/lib/HouseIcon";
  import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
  import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<div
  class="bg-muted flex h-72 flex-col overflow-y-auto rounded-lg border shadow-lg/5"
>
  <ScrollArea>
    <div class="h-96"></div>
    <BottomNavigation value="search">
      <BottomNavigation.List class="absolute">
        <BottomNavigation.Item href="https://example.com/" value="home">
          <BottomNavigation.ItemIcon>
            <HouseIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="https://example.com/search" value="search">
          <BottomNavigation.ItemIcon>
            <MagnifyingGlassIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="https://example.com/news" value="news">
          <BottomNavigation.ItemIcon>
            <BellIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item
          href="https://example.com/profile"
          value="profile"
        >
          <BottomNavigation.ItemIcon>
            <UserIcon />
          </BottomNavigation.ItemIcon>
          <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  </ScrollArea>
</div>
