import { Button } from "../../button";
import { Sidebar } from "../index";

export function Default() {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="inset">
        <Sidebar.Header class="border-b">
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton size="lg">
                <span class="truncate font-semibold">Pisagor</span>
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
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <span>Search</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>
        <header class="flex h-12 items-center gap-2 border-b px-4">
          <Sidebar.Trigger />
          <span class="font-medium text-sm">Dashboard</span>
        </header>
        <div class="flex flex-1 flex-col gap-2 p-4">
          <p class="text-muted-foreground text-sm">Main content area</p>
          <Button class="w-fit" variant="outline">
            Example action
          </Button>
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
