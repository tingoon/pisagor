import { NavigationMenu } from "..";

export function Wrapping() {
  return (
    <div className="w-72">
      <NavigationMenu aria-label="Section">
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link active href="#all">
              All
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#design">Design</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#development">
              Development
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#operations">
              Operations
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#support">Support</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>
    </div>
  );
}
