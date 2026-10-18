import { Avatar, Breadcrumb, Separator, Sidebar, Status } from "@pisagor/react";
import { tv } from "tailwind-variants";
import { members } from "./data";
import {
  NavMain,
  NavUser,
  NotificationsPopover,
  PagePlaceholder,
  SearchCommand,
  WorkspaceSwitcher,
} from "./helpers";

const inverseSidebar = tv({
  slots: {
    header: "bg-background flex h-14 shrink-0 items-center gap-2 border-b px-4",
    headerActions: "ms-auto flex items-center gap-1",
    headerDivider: "h-4",
    inverse: "dark",
    presence: "relative flex",
    presenceStatus: "ring-muted absolute -end-0.5 -bottom-0.5 ring-2",
  },
});

const styles = inverseSidebar();

const presenceVariant = {
  away: "warning",
  offline: "default",
  online: "success",
} as const;

/**
 * Inverse shell: the sidebar renders in the dark theme while the content stays
 * in the page theme. Team members show presence status on their avatars.
 */
export function InverseSidebar() {
  return (
    <Sidebar.Provider>
      <Sidebar className={styles.inverse()} collapsible="icon">
        <Sidebar.Header>
          <WorkspaceSwitcher />
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain />
          <Sidebar.Group>
            <Sidebar.GroupLabel>Team</Sidebar.GroupLabel>
            <Sidebar.Menu>
              {members.map((member) => (
                <Sidebar.MenuItem key={member.id}>
                  <Sidebar.MenuButton tooltip={member.name}>
                    <span className={styles.presence()}>
                      <Avatar fallback={member.initials} size="sm" />
                      <Status
                        aria-label={member.status}
                        className={styles.presenceStatus()}
                        size="sm"
                        variant={presenceVariant[member.status]}
                      />
                    </span>
                    <span>{member.name}</span>
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
              { href: "#team", label: "Team" },
              { isCurrentPage: true, label: "Overview" },
            ]}
          />
          <div className={styles.headerActions()}>
            <SearchCommand />
            <NotificationsPopover />
          </div>
        </header>
        <PagePlaceholder />
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
