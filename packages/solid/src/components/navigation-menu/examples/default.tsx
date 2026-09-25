import { NavigationMenu } from "../index";

export function Default() {
  return (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link active href="#">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">Docs</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  );
}
