import { BottomNavigation } from "@pisagor/solid";

export function Default() {
  return (
    <BottomNavigation value="home">
      <BottomNavigation.List>
        <BottomNavigation.Item href="#home" value="home">
          <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item href="#search" value="search">
          <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  );
}
