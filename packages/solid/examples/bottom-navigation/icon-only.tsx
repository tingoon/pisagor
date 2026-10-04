/** @jsxImportSource solid-js */

import { BottomNavigation, ScrollArea } from "@pisagor/solid";
import {
  BellIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@pisagor/solid/icons";
export function IconOnly() {
  return (
    <div class="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
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
  );
}
