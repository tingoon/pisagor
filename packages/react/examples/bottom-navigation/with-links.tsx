import {
  BellIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { BottomNavigation, ScrollArea } from "@pisagor/react";
export function WithLinks() {
  return (
    <div className="bg-muted flex h-72 flex-col overflow-y-auto rounded-lg border shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation value="search">
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item href="https://example.com/" value="home">
              <BottomNavigation.ItemIcon>
                <HouseIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item
              href="https://example.com/search"
              value="search"
            >
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
  );
}
