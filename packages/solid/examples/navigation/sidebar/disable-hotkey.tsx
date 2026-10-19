import { Sidebar } from "@pisagor/solid";
import { SidebarSimpleIcon } from "@squidlab/phosphor-solid/icons";

export function DisableHotkey() {
  return (
    <Sidebar.Provider disableHotkey>
      <Sidebar collapsible="icon" variant="inset">
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive>
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <span>Profile</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
      <Sidebar.Inset class="p-4">
        <Sidebar.Trigger>
          <SidebarSimpleIcon class="rtl:rotate-180" />
        </Sidebar.Trigger>
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
