<script lang="ts">
  import { BottomNavigation, ScrollArea } from "@pisagor/svelte";
  import {
    BellIcon,
    HouseIcon,
    MagnifyingGlassIcon,
    UserIcon,
  } from "phosphor-svelte";
</script>

<div
  class="bg-muted flex h-72 flex-col overflow-y-auto rounded-lg border shadow-lg/5"
>
  <ScrollArea>
    <div class="h-96"></div>
    <BottomNavigation value="home">
      <BottomNavigation.List class="absolute">
        <BottomNavigation.Item aria-label="Home" href="#home" value="home">
          <BottomNavigation.ItemIcon>
            <HouseIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item
          aria-label="Search"
          href="#search"
          value="search"
        >
          <BottomNavigation.ItemIcon>
            <MagnifyingGlassIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item aria-label="News" href="#news" value="news">
          <BottomNavigation.ItemIcon>
            <BellIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
        <BottomNavigation.Item
          aria-label="Profile"
          href="#profile"
          value="profile"
        >
          <BottomNavigation.ItemIcon>
            <UserIcon />
          </BottomNavigation.ItemIcon>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  </ScrollArea>
</div>
