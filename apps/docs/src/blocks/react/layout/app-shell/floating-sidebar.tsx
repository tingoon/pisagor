import { SidebarSimpleIcon } from "@phosphor-icons/react";
import { Breadcrumb, Separator, Sidebar } from "@pisagor/react";
import { tv } from "tailwind-variants";
import { secondaryNav } from "./data";
import {
  NavMain,
  NavUser,
  PagePlaceholder,
  SearchCommand,
  WorkspaceSwitcher,
} from "./helpers";

const floatingSidebar = tv({
  slots: {
    groupEnd: "mt-auto",
    header: "bg-background flex h-14 shrink-0 items-center gap-2 border-b px-4",
    headerActions: "ms-auto flex items-center gap-1",
    headerDivider: "h-4",
  },
});

const styles = floatingSidebar();

/**
 * Floating shell: the sidebar is a detached, rounded card on the page
 * background (raised surface), collapsing to icons, with a command-K search in
 * the breadcrumb header.
 */
export function FloatingSidebar() {
  return (
    <Sidebar.Provider>
      <Sidebar collapsible="icon" variant="floating">
        <Sidebar.Header>
          <WorkspaceSwitcher />
        </Sidebar.Header>
        <Sidebar.Content>
          <NavMain />
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
              { href: "#platform", label: "Platform" },
              { isCurrentPage: true, label: "Dashboard" },
            ]}
          />
          <div className={styles.headerActions()}>
            <SearchCommand />
          </div>
        </header>
        <PagePlaceholder />
      </Sidebar.Inset>
    </Sidebar.Provider>
  );
}
