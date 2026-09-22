import { BellIcon, DatabaseIcon } from "@phosphor-icons/react";
import { Avatar, Button, NavigationMenu } from "@pisagor/react";
import { Navbar } from "..";
export function Default() {
  return (
    <Navbar>
      <Navbar.Brand>
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <DatabaseIcon className="size-4" />
        </div>
        <span className="font-semibold text-sm">Pisagor</span>
      </Navbar.Brand>

      <Navbar.Nav>
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
          </NavigationMenu.List>
        </NavigationMenu>
      </Navbar.Nav>

      <Navbar.Actions>
        <Button aria-label="Notifications" size="icon-sm" variant="ghost">
          <BellIcon />
        </Button>
        <Avatar fallback="JD" size="sm" />
      </Navbar.Actions>
    </Navbar>
  );
}
