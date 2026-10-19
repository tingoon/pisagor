import {
  CaretDownIcon,
  ChartBarIcon,
  CubeIcon,
  ListIcon,
  RobotIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import {
  Button,
  DropdownMenu,
  Menu,
  Sheet,
  Surface,
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

const sectionTabs = tv({
  slots: {
    brandMark:
      "bg-primary text-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
    headerActions: "ms-auto flex items-center gap-1",
    mobileOnly: "md:hidden",
    pageHeading:
      "flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight",
    rootColumn: "bg-muted flex min-h-svh flex-col",
    sectionBody: "flex min-w-0 flex-1 flex-col gap-4 p-4 md:p-6",
    sectionFrame: "m-2 mt-0 flex min-h-0 flex-1 overflow-hidden",
    sectionNav: "hidden w-60 shrink-0 border-e p-2 md:block",
    tabsDesktop: "hidden lg:flex",
    tabsMobile: "lg:hidden",
    topbarPlain: "flex h-14 shrink-0 items-center gap-3 px-4",
  },
});

const styles = sectionTabs();

const sections = [
  {
    groups: [
      { label: "Fleet", links: ["Overview", "Robots", "Missions"] },
      { label: "Maintenance", links: ["Schedule", "History"] },
    ],
    icon: RobotIcon,
    id: "fleet",
    label: "Fleet",
  },
  {
    groups: [{ label: "Inventory", links: ["Parts", "Suppliers", "Orders"] }],
    icon: CubeIcon,
    id: "inventory",
    label: "Inventory",
  },
  {
    groups: [{ label: "Reports", links: ["Uptime", "Throughput", "Costs"] }],
    icon: ChartBarIcon,
    id: "reports",
    label: "Reports",
  },
  {
    groups: [{ label: "Security", links: ["Access", "Audit log", "Keys"] }],
    icon: ShieldCheckIcon,
    id: "security",
    label: "Security",
  },
];

/**
 * Section tabs shell: icon section tabs live in the top bar, and the grouped
 * navigation plus the page body share one rounded panel beneath it. Below `lg`
 * the tabs fold into a current-section menu; below `md` the navigation moves
 * into a sheet.
 */
export function SectionTabs() {
  const [sectionId, setSectionId] = useState("fleet");
  const section = sections.find((item) => item.id === sectionId) ?? sections[0];

  const sectionNav = (
    <Menu aria-label={`${section?.label} navigation`}>
      {section?.groups.map((group) => (
        <Menu.Group key={group.label}>
          <Menu.GroupLabel>{group.label}</Menu.GroupLabel>
          <Menu.List>
            {group.links.map((link, index) => (
              <Menu.Link active={index === 0} href="#" key={link}>
                {link}
              </Menu.Link>
            ))}
          </Menu.List>
        </Menu.Group>
      ))}
    </Menu>
  );

  return (
    <div className={styles.rootColumn()}>
      <header className={styles.topbarPlain()}>
        <Sheet
          placement="left"
          title={section?.label}
          trigger={
            <Button
              aria-label="Open navigation"
              className={styles.mobileOnly()}
              size="icon-md"
              variant="ghost"
            >
              <ListIcon />
            </Button>
          }
        >
          {sectionNav}
        </Sheet>
        <span className={styles.brandMark()}>AC</span>

        <Tabs.Root
          className={styles.tabsDesktop()}
          onValueChange={({ value }) => setSectionId(value)}
          value={sectionId}
        >
          <Tabs.List>
            {sections.map((item) => (
              <Tabs.Trigger key={item.id} value={item.id}>
                <item.icon />
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>

        <DropdownMenu onSelect={({ value }) => setSectionId(value)}>
          <DropdownMenu.Trigger asChild>
            <Button className={styles.tabsMobile()} variant="ghost">
              {section ? <section.icon /> : null}
              {section?.label}
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {sections.map((item) => (
              <DropdownMenu.Item key={item.id} value={item.id}>
                <item.icon />
                {item.label}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu>

        <div className={styles.headerActions()}>
          <SearchCommand />
          <NotificationsPopover />
          <UserMenu />
        </div>
      </header>

      <Surface bordered className={styles.sectionFrame()}>
        <nav aria-label="Section" className={styles.sectionNav()}>
          {sectionNav}
        </nav>
        <main className={styles.sectionBody()}>
          <h1 className={styles.pageHeading()}>
            {section?.groups[0]?.links[0]}
          </h1>
          <PagePlaceholder padded={false} />
        </main>
      </Surface>
    </div>
  );
}
