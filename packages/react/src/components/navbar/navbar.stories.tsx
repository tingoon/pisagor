import {
  BellIcon,
  DatabaseIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Avatar, Button, Navbar, NavigationMenu, Sidebar } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component:
          "Top application bar with brand, navigation, and action slots. Pair with Sidebar for dashboard layouts.",
      },
    },
    layout: "fullscreen",
    metadata: {
      aliases: ["header"],
      api: "compound",
      taxonomy: "pattern",
    },
  },
  subcomponents: {
    Actions: Navbar.Actions,
    Brand: Navbar.Brand,
    Content: Navbar.Content,
    Nav: Navbar.Nav,
    Root: Navbar.Root,
  },
  title: "Components/Navigation/Navbar",
});

export const Default = meta.story({
  render: () => (
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
  ),
});

export const WithSidebar = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Dashboard layout combining Navbar and Sidebar with a collapsible start rail.",
      },
    },
  },
  render: () => (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="inset">
        <Sidebar.Header className="border-b">
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <DatabaseIcon className="size-4" />
                </div>
                <span className="truncate font-semibold">Pisagor</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive>
                    <HouseIcon />
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <MagnifyingGlassIcon />
                    <span>Search</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer className="border-t">
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <UserIcon />
                <span>Account</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>

      <Sidebar.Inset>
        <Navbar>
          <Navbar.Brand className="gap-3">
            <Sidebar.Trigger />
            <span className="font-medium text-sm">Dashboard</span>
          </Navbar.Brand>

          <Navbar.Content className="justify-end">
            <Navbar.Actions>
              <Button aria-label="Notifications" size="icon-sm" variant="ghost">
                <BellIcon />
              </Button>
              <Avatar fallback="JD" size="sm" />
            </Navbar.Actions>
          </Navbar.Content>
        </Navbar>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-muted-foreground text-sm">Main content area</p>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  ),
});
