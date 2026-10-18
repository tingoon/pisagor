import {
  ChartBarIcon,
  FolderIcon,
  GearIcon,
  HouseIcon,
  TrayIcon,
} from "@phosphor-icons/react";
import { AppShell, Breadcrumb, Menu, Progress } from "@pisagor/react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { PagePlaceholder, SearchCommand, UserMenu } from "./helpers";

const dualSidebar = tv({
  slots: {
    brandMark:
      "bg-primary text-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
    groupEnd: "mt-auto",
    headerActions: "ms-auto flex items-center gap-1",
    panelTitle: "text-foreground px-1 text-sm font-semibold tracking-tight",
    srOnly: "sr-only",
    usageRow: "text-foreground flex items-center justify-between font-medium",
  },
});

const styles = dualSidebar();

const sections = [
  {
    groups: [
      { label: "Overview", links: ["Summary", "Activity", "Goals"] },
      { label: "Shortcuts", links: ["Recent", "Starred"] },
    ],
    icon: HouseIcon,
    id: "home",
    label: "Home",
  },
  {
    groups: [
      { label: "Mailboxes", links: ["Inbox", "Drafts", "Sent", "Archive"] },
    ],
    icon: TrayIcon,
    id: "inbox",
    label: "Inbox",
  },
  {
    groups: [
      { label: "Active", links: ["Website redesign", "Mobile app"] },
      { label: "Library", links: ["Templates", "Archived"] },
    ],
    icon: FolderIcon,
    id: "projects",
    label: "Projects",
  },
  {
    groups: [{ label: "Reports", links: ["Traffic", "Revenue", "Retention"] }],
    icon: ChartBarIcon,
    id: "analytics",
    label: "Analytics",
  },
  {
    groups: [
      { label: "Workspace", links: ["General", "Members", "Billing"] },
      { label: "Account", links: ["Profile", "Security"] },
    ],
    icon: GearIcon,
    id: "settings",
    label: "Settings",
  },
];

/**
 * Dual sidebar shell: a fixed icon rail picks the section and a secondary panel
 * swaps its navigation per section. The panel collapses while the rail stays; a
 * storage meter is pinned to the panel footer.
 */
export function DualSidebar() {
  const [sectionId, setSectionId] = useState("home");
  const section = sections.find((item) => item.id === sectionId) ?? sections[0];

  return (
    <AppShell>
      <AppShell.Rail
        activeRailId={sectionId}
        onActiveRailIdChange={setSectionId}
        placement="start"
      >
        <span className={styles.brandMark()}>AC</span>
        {sections.map((item) => (
          <AppShell.RailItem
            key={item.id}
            opensPanel
            railId={item.id}
            tooltip={item.label}
          >
            <item.icon aria-hidden />
            <span className={styles.srOnly()}>{item.label}</span>
          </AppShell.RailItem>
        ))}
        <div className={styles.groupEnd()}>
          <UserMenu />
        </div>
      </AppShell.Rail>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelHeader>
          <h2 className={styles.panelTitle()}>{section?.label}</h2>
        </AppShell.PanelHeader>
        <AppShell.PanelContent>
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
        </AppShell.PanelContent>
        <AppShell.PanelFooter>
          <div className={styles.usageRow()}>
            <span>Storage</span>
            <span>7.2 of 10 GB</span>
          </div>
          <Progress aria-label="Storage used" value={72} />
        </AppShell.PanelFooter>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Header>
          <AppShell.PanelTrigger
            aria-label="Toggle secondary navigation"
            placement="start"
          />
          <Breadcrumb
            items={[
              { href: "#", label: section?.label ?? "" },
              {
                isCurrentPage: true,
                label: section?.groups[0]?.links[0] ?? "",
              },
            ]}
          />
          <div className={styles.headerActions()}>
            <SearchCommand />
          </div>
        </AppShell.Header>
        <AppShell.Content>
          <PagePlaceholder padded={false} />
        </AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
