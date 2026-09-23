import { NavigationMenu } from "..";

export function Default() {
  return (
    <NavigationMenu aria-label="Main">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link active href="#overview">
            Overview
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#projects">Projects</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#settings">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  );
}
