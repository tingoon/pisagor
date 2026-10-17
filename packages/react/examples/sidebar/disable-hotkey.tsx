import { HouseIcon, UserIcon } from "@phosphor-icons/react";
import { Sidebar } from "@pisagor/react";

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
      <Sidebar.Inset className="p-4">
        <Sidebar.Trigger />
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
