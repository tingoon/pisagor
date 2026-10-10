import {
  BellIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { BottomNavigation, ScrollArea } from "@pisagor/react";
import { bottomNavigationRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandBottomNavigationRecipe = tv({
  extend: bottomNavigationRecipe,
  slots: { list: "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950" },
  variants: {},
});

export function CustomRecipe() {
  return (
    <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation
          defaultValue="home"
          recipe={brandBottomNavigationRecipe}
        >
          <BottomNavigation.List className="absolute">
            <BottomNavigation.Item value="home">
              <BottomNavigation.ItemIcon>
                <HouseIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="search">
              <BottomNavigation.ItemIcon>
                <MagnifyingGlassIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="news">
              <BottomNavigation.ItemIcon>
                <BellIcon />
              </BottomNavigation.ItemIcon>
              <BottomNavigation.ItemLabel>News</BottomNavigation.ItemLabel>
            </BottomNavigation.Item>
            <BottomNavigation.Item value="profile">
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
