import {
  BellIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { ScrollArea } from "@pisagor/react";
import { BottomNavigation } from "..";
export function IconOnly() {
  return (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="home">
          <BottomNavigation.List className="absolute">
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
