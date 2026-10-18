<script lang="ts">
  import { Button, Sidebar } from "@pisagor/svelte";
  import { HouseIcon, MagnifyingGlassIcon, UserIcon } from "phosphor-svelte";
</script>

<Sidebar.Provider>
  <Sidebar collapsible="icon" variant="inset">
    <Sidebar.Header class="border-b">
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <Sidebar.MenuButton size="lg">
            <div
              class="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
            >
              <HouseIcon class="size-4" />
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
    <header class="flex h-12 items-center gap-2 border-b px-4">
      <Sidebar.Trigger />
      <span class="text-sm font-medium">Dashboard</span>
    </header>
    <div class="flex flex-1 flex-col gap-2 p-4">
      <p class="text-muted-foreground text-sm">Main content area</p>
      <Button class="w-fit" variant="outline">Example action</Button>
    </div>
  </Sidebar.Inset>
</Sidebar.Provider>
