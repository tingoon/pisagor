import { navbarRecipe } from "@pisagor/recipes";
import { Avatar, Button, Navbar, NavigationMenu } from "@pisagor/solid";
import { BellIcon, DatabaseIcon } from "@pisagor/solid/icons";
import { tv } from "tailwind-variants";

const brandNavbarRecipe = tv({
  extend: navbarRecipe,
  slots: {
    base: "border-emerald-500/30 bg-emerald-500/5",
    brand: "text-emerald-700 dark:text-emerald-300",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <Navbar recipe={brandNavbarRecipe}>
      <Navbar.Brand>
        <div class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <DatabaseIcon class="size-4" />
        </div>
        <span class="font-semibold text-sm">Pisagor</span>
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
              <NavigationMenu.Link href="#projects">
                Projects
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#analytics">
                Analytics
              </NavigationMenu.Link>
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
