import { useFilter, useHotkey, useListCollection, Portal } from "@ark-ui/react";
import {
  BellIcon,
  CaretUpDownIcon,
  CreditCardIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import {
  Avatar,
  Button,
  Collapsible,
  Command,
  DropdownMenu,
  Kbd,
  Popover,
  Sidebar,
  InputGroup,
} from "@pisagor/react";
import { useState } from "react";
import { tv } from "tailwind-variants";
import { mainNav, type NavItem, notifications, user, workspaces } from "./data";

const appShellHelpers = tv({
  slots: {
    body: "flex flex-1 flex-col gap-4 p-4 md:p-6",
    brandMark:
      "bg-primary text-primary-foreground flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
    brandMeta: "text-muted-foreground truncate text-xs",
    brandName: "text-foreground truncate font-semibold",
    brandText: "grid min-w-0 flex-1 text-start text-sm leading-tight",
    canvas: "bg-muted min-h-96 flex-1 rounded-xl",
    collapsibleIndicator: "ms-auto",
    dropdownContent: "w-60",
    dropdownLabel: "flex items-center gap-2 text-start text-sm",
    menuCaret: "text-muted-foreground ms-auto size-4",
    notificationItem: "hover:bg-accent flex items-start gap-3 rounded-lg p-2",
    notificationList: "flex flex-col gap-1",
    notificationText: "grid gap-0.5 text-sm",
    notificationTime: "text-muted-foreground text-xs",
    placeholder: "flex flex-1 flex-col gap-4",
    popoverContent: "w-80",
    searchTrigger: "text-muted-foreground w-full justify-start gap-2 md:w-64",
    tile: "bg-muted aspect-video rounded-xl",
    tiles: "grid gap-4 md:grid-cols-3",
    trailing: "ms-auto",
  },
});

const styles = appShellHelpers();

/** Workspace switcher for the sidebar header. */
export function WorkspaceSwitcher() {
  const [activeId, setActiveId] = useState(workspaces[0]?.id);
  const active = workspaces.find((workspace) => workspace.id === activeId);

  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root
          onSelect={({ value }) => {
            if (value !== "add") setActiveId(value);
          }}
          positioning={{ placement: "bottom-start" }}
        >
          <DropdownMenu.Trigger asChild>
            <Sidebar.MenuButton size="lg">
              <span className={styles.brandMark()}>{active?.initials}</span>
              <span className={styles.brandText()}>
                <span className={styles.brandName()}>{active?.name}</span>
                <span className={styles.brandMeta()}>{active?.plan}</span>
              </span>
              <CaretUpDownIcon className={styles.menuCaret()} />
            </Sidebar.MenuButton>
          </DropdownMenu.Trigger>
          <Portal>
            <DropdownMenu.Positioner>
              <DropdownMenu.Content className={styles.dropdownContent()}>
                <DropdownMenu.ItemGroup>
                  <DropdownMenu.ItemGroupLabel>
                    Workspaces
                  </DropdownMenu.ItemGroupLabel>
                  {workspaces.map((workspace) => (
                    <DropdownMenu.Item key={workspace.id} value={workspace.id}>
                      <Avatar fallback={workspace.initials} size="sm" />
                      {workspace.name}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.ItemGroup>
                <DropdownMenu.Separator />
                <DropdownMenu.Item value="add">
                  <PlusIcon />
                  Add workspace
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Positioner>
          </Portal>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}

/** Primary sidebar navigation with collapsible sub-items and count badges. */
export function NavMain({
  items = mainNav,
  label = "Platform",
}: {
  items?: NavItem[];
  label?: string;
}) {
  return (
    <Sidebar.Group>
      <Sidebar.GroupLabel>{label}</Sidebar.GroupLabel>
      <Sidebar.Menu>
        {items.map((item) =>
          item.items ? (
            <Collapsible.Root
              asChild
              defaultOpen={item.isActive}
              key={item.title}
            >
              <Sidebar.MenuItem>
                <Collapsible.Trigger asChild>
                  <Sidebar.MenuButton isActive={item.isActive}>
                    <item.icon />
                    <span>{item.title}</span>
                    <Collapsible.Indicator
                      className={styles.collapsibleIndicator()}
                    />
                  </Sidebar.MenuButton>
                </Collapsible.Trigger>
                <Collapsible.Content>
                  <Collapsible.Body>
                    <Sidebar.MenuSub>
                      {item.items.map((subItem) => (
                        <Sidebar.MenuSubItem key={subItem.title}>
                          <Sidebar.MenuSubButton href={subItem.href}>
                            <span>{subItem.title}</span>
                          </Sidebar.MenuSubButton>
                        </Sidebar.MenuSubItem>
                      ))}
                    </Sidebar.MenuSub>
                  </Collapsible.Body>
                </Collapsible.Content>
              </Sidebar.MenuItem>
            </Collapsible.Root>
          ) : (
            <Sidebar.MenuItem key={item.title}>
              <Sidebar.MenuButton isActive={item.isActive} tooltip={item.title}>
                <item.icon />
                <span>{item.title}</span>
              </Sidebar.MenuButton>
              {item.badge ? (
                <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>
              ) : null}
            </Sidebar.MenuItem>
          ),
        )}
      </Sidebar.Menu>
    </Sidebar.Group>
  );
}

/** Account menu for the sidebar footer. */
export function NavUser() {
  return (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root positioning={{ placement: "right-end" }}>
          <DropdownMenu.Trigger asChild>
            <Sidebar.MenuButton size="lg">
              <Avatar fallback={user.initials} name={user.name} />
              <span className={styles.brandText()}>
                <span className={styles.brandName()}>{user.name}</span>
                <span className={styles.brandMeta()}>{user.email}</span>
              </span>
              <CaretUpDownIcon className={styles.menuCaret()} />
            </Sidebar.MenuButton>
          </DropdownMenu.Trigger>
          <UserMenuContent />
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  );
}

/** Avatar button + account menu for top bars. */
export function UserMenu() {
  return (
    <DropdownMenu.Root positioning={{ placement: "bottom-end" }}>
      <DropdownMenu.Trigger asChild>
        <Button aria-label="Account" size="icon-md" variant="ghost">
          <Avatar fallback={user.initials} name={user.name} size="sm" />
        </Button>
      </DropdownMenu.Trigger>
      <UserMenuContent />
    </DropdownMenu.Root>
  );
}

function UserMenuContent() {
  return (
    <Portal>
      <DropdownMenu.Positioner>
        <DropdownMenu.Content className={styles.dropdownContent()}>
          <DropdownMenu.ItemGroup>
            <DropdownMenu.ItemGroupLabel className={styles.dropdownLabel()}>
              <Avatar fallback={user.initials} name={user.name} size="sm" />
              <span className={styles.brandText()}>
                <span className={styles.brandName()}>{user.name}</span>
                <span className={styles.brandMeta()}>{user.email}</span>
              </span>
            </DropdownMenu.ItemGroupLabel>
          </DropdownMenu.ItemGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.ItemGroup>
            <DropdownMenu.Item value="account">
              <UserIcon />
              Account
            </DropdownMenu.Item>
            <DropdownMenu.Item value="billing">
              <CreditCardIcon />
              Billing
            </DropdownMenu.Item>
            <DropdownMenu.Item value="settings">
              <GearIcon />
              Settings
            </DropdownMenu.Item>
          </DropdownMenu.ItemGroup>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="sign-out">
            <SignOutIcon />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Positioner>
    </Portal>
  );
}

const searchItems = mainNav.flatMap((item) => [
  { group: "Pages", label: item.title, value: item.href },
  ...(item.items ?? []).map((subItem) => ({
    group: item.title,
    label: subItem.title,
    value: subItem.href,
  })),
]);

/** Command-K search: a real command palette dialog with a shortcut hint. */
export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems: searchItems,
  });

  useHotkey({ action: () => setOpen(true), hotkey: "mod+K" });

  return (
    <Command.Dialog
      onOpenChange={(details) => setOpen(details.open)}
      open={open}
      trigger={
        <Button className={styles.searchTrigger()} variant="outline">
          <MagnifyingGlassIcon />
          Search…
          <Kbd.Group className={styles.trailing()}>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </Kbd.Group>
        </Button>
      }
    >
      <Command.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={() => setOpen(false)}
      >
        <Command.Control>
          <InputGroup className="bg-input/32 rounded-lg">
            <InputGroup.Addon>
              <MagnifyingGlassIcon aria-hidden className="opacity-64" />
            </InputGroup.Addon>
            <Command.Input asChild>
              <InputGroup.Input autoFocus placeholder="Search pages…" />
            </Command.Input>
          </InputGroup>
        </Command.Control>
        <Command.Content>
          <Command.Empty>No pages found.</Command.Empty>
          <Command.List>
            {collection.group().map(([group, items]) => (
              <Command.ItemGroup key={group}>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.label}
                  </Command.Item>
                ))}
              </Command.ItemGroup>
            ))}
          </Command.List>
        </Command.Content>
      </Command.Root>
    </Command.Dialog>
  );
}

/** Bell button with a notifications popover. */
export function NotificationsPopover() {
  return (
    <Popover.Root positioning={{ placement: "bottom-end" }}>
      <Popover.Trigger asChild>
        <Button aria-label="Notifications" size="icon-md" variant="ghost">
          <BellIcon />
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content className={styles.popoverContent()}>
            <Popover.Header>
              <Popover.Title>Notifications</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <ul className={styles.notificationList()}>
                {notifications.map((notification) => (
                  <li
                    className={styles.notificationItem()}
                    key={notification.id}
                  >
                    <Avatar fallback={notification.initials} size="sm" />
                    <span className={styles.notificationText()}>
                      {notification.text}
                      <span className={styles.notificationTime()}>
                        {notification.time}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}

/** Skeleton content region — replace with the page. */
export function PagePlaceholder({ padded = true }: { padded?: boolean }) {
  return (
    <div className={padded ? styles.body() : styles.placeholder()}>
      <div className={styles.tiles()}>
        <div className={styles.tile()} />
        <div className={styles.tile()} />
        <div className={styles.tile()} />
      </div>
      <div className={styles.canvas()} />
    </div>
  );
}
