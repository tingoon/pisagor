import { Portal } from "@ark-ui/react";
import { DotsThreeIcon, FolderIcon } from "@phosphor-icons/react";
import { Breadcrumb, DropdownMenu, Separator, Sidebar } from "@pisagor/react";
import { tv } from "tailwind-variants";
import { projects, secondaryNav } from "./data";
import {
  NavMain,
  NavUser,
  NotificationsPopover,
  PagePlaceholder,
  WorkspaceSwitcher,
} from "./helpers";

const flatSidebar = tv({
  slots: {
    groupEnd: "mt-auto",
    header: "bg-background flex h-14 shrink-0 items-center gap-2 border-b px-4",
    headerActions: "ms-auto flex items-center gap-1",
    headerDivider: "h-4",
  },
});

const styles = flatSidebar();

/**
 * Flat shell: a sidebar that collapses to an icon rail, separated from the
 * content by a border on the same background, with a breadcrumb header.
 */
export function FlatSidebar() {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon">
        <Sidebar.Header>
          <WorkspaceSwitcher />
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain />
          <Sidebar.Group>
            <Sidebar.GroupLabel>Pinned</Sidebar.GroupLabel>
            <Sidebar.Menu>
              {projects.map((project) => (
                <Sidebar.MenuItem key={project.id}>
                  <Sidebar.MenuButton tooltip={project.name}>
                    <FolderIcon />
                    <span>{project.name}</span>
                  </Sidebar.MenuButton>
                  <DropdownMenu.Root positioning={{ placement: "right-start" }}>
                    <DropdownMenu.Trigger asChild>
                      <Sidebar.MenuAction aria-label="More" showOnHover>
                        <DotsThreeIcon />
                      </Sidebar.MenuAction>
                    </DropdownMenu.Trigger>
                    <Portal>
                      <DropdownMenu.Positioner>
                        <DropdownMenu.Content>
                          <DropdownMenu.Item value="open">
                            Open
                          </DropdownMenu.Item>
                          <DropdownMenu.Item value="unpin">
                            Unpin
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item
                            value="delete"
                            variant="destructive"
                          >
                            Delete
                          </DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Positioner>
                    </Portal>
                  </DropdownMenu.Root>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
          <Sidebar.Group className={styles.groupEnd()}>
            <Sidebar.Menu>
              {secondaryNav.map((item) => (
                <Sidebar.MenuItem key={item.title}>
                  <Sidebar.MenuButton size="sm" tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <NavUser />
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>
        <header className={styles.header()}>
          <Sidebar.Trigger />
          <Separator
            className={styles.headerDivider()}
            orientation="vertical"
          />
          <Breadcrumb
            items={[
              { href: "#dashboard", label: "Acme Inc" },
              { isCurrentPage: true, label: "Dashboard" },
            ]}
          />
          <div className={styles.headerActions()}>
            <NotificationsPopover />
          </div>
        </header>
        <PagePlaceholder />
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
