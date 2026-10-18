import {
  CompassIcon,
  FireIcon,
  HouseIcon,
  PlusIcon,
  StarIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import { AppShell, Badge, Button, Menu } from "@pisagor/react";
import { tv } from "tailwind-variants";
import {
  NotificationsPopover,
  PagePlaceholder,
  SearchCommand,
  UserMenu,
} from "./helpers";

const headerSidebar = tv({
  slots: {
    brandMark:
      "bg-primary text-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
    brandName: "text-foreground truncate font-semibold",
    headerActions: "ms-auto flex items-center gap-1",
    navRow: "flex h-14 w-full items-center gap-3",
    trailing: "ms-auto",
  },
});

const styles = headerSidebar();

const feeds = [
  { count: "24", href: "#home", icon: HouseIcon, label: "Home" },
  { count: "8", href: "#popular", icon: FireIcon, label: "Popular" },
  { href: "#explore", icon: CompassIcon, label: "Explore" },
];

const communities = [
  { href: "#design", icon: StarIcon, label: "Design systems" },
  { count: "3", href: "#frontend", icon: UsersThreeIcon, label: "Frontend" },
  { href: "#product", icon: UsersThreeIcon, label: "Product" },
];

/**
 * Header-first shell: a full-width top bar spans the page above a collapsible
 * navigation panel. Search, create, notifications, and the account menu live in
 * the top bar.
 */
export function HeaderSidebar() {
  return (
    <AppShell>
      <AppShell.Navigation>
        <div className={styles.navRow()}>
          <AppShell.PanelTrigger
            aria-label="Toggle navigation"
            placement="start"
          />
          <span className={styles.brandMark()}>AC</span>
          <span className={styles.brandName()}>Acme Community</span>
          <div className={styles.headerActions()}>
            <SearchCommand />
            <Button size="sm">
              <PlusIcon />
              Create
            </Button>
            <NotificationsPopover />
            <UserMenu />
          </div>
        </div>
      </AppShell.Navigation>

      <AppShell.Panel defaultOpen placement="start">
        <AppShell.PanelContent>
          <Menu aria-label="Feeds">
            <Menu.Group>
              <Menu.GroupLabel>Feeds</Menu.GroupLabel>
              <Menu.List>
                {feeds.map((item, index) => (
                  <Menu.Link
                    active={index === 0}
                    href={item.href}
                    key={item.label}
                  >
                    <item.icon />
                    {item.label}
                    {item.count ? (
                      <Badge className={styles.trailing()} variant="secondary">
                        {item.count}
                      </Badge>
                    ) : null}
                  </Menu.Link>
                ))}
              </Menu.List>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Group>
              <Menu.GroupLabel>Communities</Menu.GroupLabel>
              <Menu.List>
                {communities.map((item) => (
                  <Menu.Link href={item.href} key={item.label}>
                    <item.icon />
                    {item.label}
                    {item.count ? (
                      <Badge className={styles.trailing()} variant="secondary">
                        {item.count}
                      </Badge>
                    ) : null}
                  </Menu.Link>
                ))}
              </Menu.List>
            </Menu.Group>
          </Menu>
        </AppShell.PanelContent>
      </AppShell.Panel>

      <AppShell.Main>
        <AppShell.Content>
          <PagePlaceholder padded={false} />
        </AppShell.Content>
      </AppShell.Main>
    </AppShell>
  );
}
