import {
  CaretDownIcon,
  ChartBarIcon,
  FolderIcon,
  HouseIcon,
  PlusIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import {
  Badge,
  Button,
  DropdownMenu,
  Navbar,
  NavigationMenu,
  Tabs,
} from "@pisagor/react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import {
  NotificationsPopover,
  PagePlaceholder,
  SearchCommand,
  UserMenu,
} from "./helpers";

const topNav = tv({
  slots: {
    brandMark:
      "bg-primary text-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
    brandName: "text-foreground truncate font-semibold",
    headerActions: "ms-auto flex items-center gap-1",
    navRow: "flex h-14 w-full items-center gap-3",
    pageHeader: "flex flex-col gap-4 border-b px-4 pt-6 md:px-6",
    pageHeading:
      "flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight",
    pageSurface: "bg-background flex flex-1 flex-col",
    rootColumn: "bg-muted flex min-h-svh flex-col",
    tabsDesktop: "hidden lg:flex",
    tabsMobile: "lg:hidden",
    viewMenu: "mb-4 w-fit lg:hidden",
  },
});

const styles = topNav();

const sections = [
  { href: "#overview", icon: HouseIcon, label: "Overview" },
  { href: "#projects", icon: FolderIcon, label: "Projects" },
  { href: "#team", icon: UsersIcon, label: "Team" },
  { href: "#reports", icon: ChartBarIcon, label: "Reports" },
];

const views = [
  "All",
  "Active",
  "Scheduled",
  "Paused",
  "Review",
  "Completed",
  "Failed",
  "Archived",
];

/**
 * Top nav shell with no sidebar: icon sections in the top bar, then a page
 * header with count badges and a view track. Sections and views each fold into
 * a dropdown on small screens.
 */
export function TopNav() {
  const [view, setView] = useState("All");

  return (
    <div className={styles.rootColumn()}>
      <Navbar>
        <Navbar.Brand>
          <span className={styles.brandMark()}>AC</span>
          <span className={styles.brandName()}>Acme</span>
        </Navbar.Brand>

        <Navbar.Nav className={styles.tabsDesktop()}>
          <NavigationMenu aria-label="Sections">
            <NavigationMenu.List>
              {sections.map((item, index) => (
                <NavigationMenu.Item key={item.label}>
                  <NavigationMenu.Link active={index === 0} href={item.href}>
                    <item.icon />
                    {item.label}
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu>
        </Navbar.Nav>

        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button className={styles.tabsMobile()} variant="ghost">
              Sections
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {sections.map((item) => (
              <DropdownMenu.Item key={item.label} value={item.href}>
                <item.icon />
                {item.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu>

        <Navbar.Actions>
          <SearchCommand />
          <NotificationsPopover />
          <UserMenu />
        </Navbar.Actions>
      </Navbar>

      <div className={styles.pageSurface()}>
        <div className={styles.pageHeader()}>
          <div className={styles.navRow()}>
            <h1 className={styles.pageHeading()}>
              Missions
              <Badge variant="secondary">128</Badge>
              <Badge variant="warning">6 need review</Badge>
            </h1>
            <div className={styles.headerActions()}>
              <Button size="sm">
                <PlusIcon />
                New mission
              </Button>
            </div>
          </div>

          <Tabs.Root
            className={styles.tabsDesktop()}
            onValueChange={(details) => setView(details.value)}
            value={view}
          >
            <Tabs.List variant="underline">
              {views.map((item) => (
                <Tabs.Trigger key={item} value={item}>
                  {item}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>

          <DropdownMenu onSelect={(details) => setView(details.value)}>
            <DropdownMenu.Trigger asChild>
              <Button className={styles.viewMenu()} variant="outline">
                {view}
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {views.map((item) => (
                <DropdownMenu.Item key={item} value={item}>
                  {item}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
        <PagePlaceholder />
      </div>
    </div>
  );
}
