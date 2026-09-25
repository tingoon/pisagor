import {
  BellIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { ScrollArea } from "@pisagor/react";
import { BottomNavigation } from "..";
export function WithLinks() {
  return (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation defaultValue="/docs">
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item asChild value="/">
              <a href="https://example.com/">
                <BottomNavigation.ItemIcon>
                  <HouseIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs">
              <a href="https://example.com/search">
                <BottomNavigation.ItemIcon>
                  <MagnifyingGlassIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs/components">
              <a href="https://example.com/news">
                <BottomNavigation.ItemIcon>
                  <BellIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
            <BottomNavigation.Item asChild value="/docs/components">
              <a href="https://example.com/profile">
                <BottomNavigation.ItemIcon>
                  <UserIcon />
                </BottomNavigation.ItemIcon>
                <BottomNavigation.ItemLabel>Profile</BottomNavigation.ItemLabel>
              </a>
            </BottomNavigation.Item>
          </BottomNavigation.List>
        </BottomNavigation>
      </ScrollArea>
    </div>
  );
}
