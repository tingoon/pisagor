import {
  BellIcon,
  DatabaseIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Avatar, Button, Sidebar } from "@pisagor/react";
import { Navbar } from "..";
export function WithSidebar() {
  return (
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
  );
}
