import {
  ArchiveIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  SignOutIcon,
  UserIcon,
} from "@phosphor-icons/react";
import { Menu } from "@pisagor/react/menu";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Menu,
  parameters: {
    docs: {
      aliases: ["nav", "navigation"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Always-visible list of navigation links or actions. For popup menus opened from a trigger, use Dropdown Menu.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Group: Menu.Group,
    GroupLabel: Menu.GroupLabel,
    Item: Menu.Item,
    Link: Menu.Link,
    List: Menu.List,
    Root: Menu.Root,
    Separator: Menu.Separator,
    Shortcut: Menu.Shortcut,
  },
  title: "Components/Navigation/Menu",
});

export const Default = meta.story({
  render: () => (
    <div className="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
      <Menu aria-label="Account">
        <Menu.List>
          <Menu.Link active href="#profile">
            <UserIcon />
            Profile
          </Menu.Link>
          <Menu.Link href="#settings">
            <GearIcon />
            Settings
          </Menu.Link>
          <Menu.Separator />
          <Menu.Item>
            <SignOutIcon />
            Sign out
            <Menu.Shortcut>⇧⌘Q</Menu.Shortcut>
          </Menu.Item>
        </Menu.List>
      </Menu>
    </div>
  ),
});

export const WithGroups = meta.story({
  render: () => (
    <div className="w-56 rounded-xl border bg-background p-1 shadow-xs/5">
      <Menu aria-label="Application">
        <Menu.Group>
          <Menu.GroupLabel>Navigation</Menu.GroupLabel>
          <Menu.List>
            <Menu.Link active href="#home">
              <HouseIcon />
              Home
            </Menu.Link>
            <Menu.Link href="#search">
              <MagnifyingGlassIcon />
              Search
            </Menu.Link>
          </Menu.List>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel>Library</Menu.GroupLabel>
          <Menu.List>
            <Menu.Link href="#archive">
              <ArchiveIcon />
              Archive
            </Menu.Link>
          </Menu.List>
        </Menu.Group>
      </Menu>
    </div>
  ),
});
