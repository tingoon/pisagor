import { HouseIcon, MagnifyingGlassIcon, UserIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react";
import { Sidebar } from "..";
export function Default() {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="inset">
        <Sidebar.Header className="border-b">
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <HouseIcon className="size-4" />
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
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <Sidebar.Trigger />
          <span className="font-medium text-sm">Dashboard</span>
        </header>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-muted-foreground text-sm">Main content area</p>
          <Button className="w-fit" variant="outline">
            Example action
          </Button>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
