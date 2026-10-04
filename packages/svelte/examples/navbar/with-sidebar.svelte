<script lang="ts">
import { Avatar, Button, Navbar, Sidebar } from "@pisagor/svelte";
import BellIcon from "phosphor-svelte/lib/BellIcon";
import DatabaseIcon from "phosphor-svelte/lib/DatabaseIcon";
import HouseIcon from "phosphor-svelte/lib/HouseIcon";
import MagnifyingGlassIcon from "phosphor-svelte/lib/MagnifyingGlassIcon";
import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<Sidebar.Provider>
  <Sidebar collapsible="icon" variant="inset">
    <Sidebar.Header class="border-b">
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton size="lg">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
            >
              <DatabaseIcon class="size-4" />
            </div>
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
    <Sidebar.Footer class="border-t">
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
      <Navbar.Brand class="gap-3">
        <Sidebar.Trigger />
        <span class="font-medium text-sm">Dashboard</span>
      </Navbar.Brand>

      <Navbar.Content class="justify-end">
        <Navbar.Actions>
          <Button aria-label="Notifications" size="icon-sm" variant="ghost">
            <BellIcon />
          </Button>
          <Avatar fallback="JD" size="sm" />
        </Navbar.Actions>
      </Navbar.Content>
    </Navbar>

    <div class="flex flex-1 flex-col gap-2 p-4">
      <p class="text-muted-foreground text-sm">Main content area</p>
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>
