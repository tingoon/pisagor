import { FolderIcon, SidebarSimpleIcon } from "@phosphor-icons/react";
import {
  Breadcrumb,
  CircularProgress,
  Progress,
  Separator,
  Sidebar,
} from "@pisagor/react";
import { tv } from "tailwind-variants";
import { projects } from "./data";
import {
  NavMain,
  NavUser,
  NotificationsPopover,
  PagePlaceholder,
  SearchCommand,
  WorkspaceSwitcher,
} from "./helpers";

const insetSidebar = tv({
  slots: {
    brandMeta: "text-muted-foreground truncate text-xs",
    header: "bg-background flex h-14 shrink-0 items-center gap-2 border-b px-4",
    headerActions: "ms-auto flex items-center gap-1",
    headerDivider: "h-4",
    projectProgress: "ms-auto group-data-[collapsible=icon]:hidden",
    usageCard:
      "bg-background flex flex-col gap-2 rounded-xl border p-3 text-xs group-data-[collapsible=icon]:hidden",
    usageRow: "text-foreground flex items-center justify-between font-medium",
  },
});

const styles = insetSidebar();

/**
 * Inset shell: the sidebar shares the page background and the content sits in a
 * raised, rounded panel. Projects show progress rings and the footer carries a
 * usage meter.
 */
export function InsetSidebar() {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="inset">
        <Sidebar.Header>
          <WorkspaceSwitcher />
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain />
          <Sidebar.Group>
            <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
            <Sidebar.Menu>
              {projects.map((project) => (
                <Sidebar.MenuItem key={project.id}>
                  <Sidebar.MenuButton tooltip={project.name}>
                    <FolderIcon />
                    <span>{project.name}</span>
                    <CircularProgress
                      aria-label={`${project.name} progress`}
                      className={styles.projectProgress()}
                      size={16}
                      value={project.progress}
                    />
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <div className={styles.usageCard()}>
            <div className={styles.usageRow()}>
              <span>Monthly usage</span>
              <span>82%</span>
            </div>
            <Progress aria-label="Monthly usage" value={82} />
            <span className={styles.brandMeta()}>
              Upgrade before your plan runs out.
            </span>
          </div>
          <NavUser />
        </Sidebar.Footer>
        <Sidebar.Rail />
      </Sidebar>
      <Sidebar.Inset>
        <header className={styles.header()}>
          <Sidebar.Trigger>
            <SidebarSimpleIcon className="rtl:rotate-180" />
          </Sidebar.Trigger>
          <Separator
            className={styles.headerDivider()}
            orientation="vertical"
          />
          <Breadcrumb
            items={[
              { href: "#projects", label: "Projects" },
              { isCurrentPage: true, label: "Website redesign" },
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
