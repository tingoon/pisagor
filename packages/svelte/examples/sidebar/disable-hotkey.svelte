<script module lang="ts">
  import source from "./disable-hotkey.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Sidebar } from "@pisagor/svelte";
  import HouseIcon from "phosphor-svelte/lib/HouseIcon";
  import UserIcon from "phosphor-svelte/lib/UserIcon";
</script>

<Sidebar.Provider disableHotkey>
  <Sidebar collapsible="icon" variant="inset">
    <Sidebar.Content>
      <Sidebar.Group>
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
                <UserIcon />
                <span>Profile</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
  </Sidebar>
  <Sidebar.Inset class="p-4">
    <Sidebar.Trigger />
  </Sidebar.Inset>
</Sidebar.Provider>
