import { BottomNavigation } from "../index";

export function Default() {
  return (
    <BottomNavigation defaultValue="home">
      <BottomNavigation.List>
        <BottomNavigation.Item value="home">
          <BottomNavigation.ItemLabel>Home</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
        <BottomNavigation.Item value="search">
          <BottomNavigation.ItemLabel>Search</BottomNavigation.ItemLabel>
        </BottomNavigation.Item>
      </BottomNavigation.List>
    </BottomNavigation>
  );
}
