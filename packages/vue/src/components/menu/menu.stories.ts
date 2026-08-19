import {
  PhArchive,
  PhGear,
  PhHouse,
  PhMagnifyingGlass,
  PhSignOut,
  PhUser,
} from "@phosphor-icons/vue";
import { Menu } from "@pisagor/vue/menu";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          "Always-visible list of navigation links or actions. For popup menus opened from a trigger, use Dropdown Menu.",
      },
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
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "w-56 rounded-xl border bg-background p-1 shadow-xs/5" }, [
          h(Menu, { "aria-label": "Account" }, () =>
            h(Menu.List, null, () => [
              h(Menu.Link, { active: true, href: "#profile" }, () => [h(PhUser), "Profile"]),
              h(Menu.Link, { href: "#settings" }, () => [h(PhGear), "Settings"]),
              h(Menu.Separator),
              h(Menu.Item, null, () => [
                h(PhSignOut),
                "Sign out",
                h(Menu.Shortcut, null, () => "⇧⌘Q"),
              ]),
            ]),
          ),
        ]);
    },
  }),
});

export const WithGroups = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "w-56 rounded-xl border bg-background p-1 shadow-xs/5" }, [
          h(Menu, { "aria-label": "Application" }, () => [
            h(Menu.Group, null, () => [
              h(Menu.GroupLabel, null, () => "Navigation"),
              h(Menu.List, null, () => [
                h(Menu.Link, { active: true, href: "#home" }, () => [h(PhHouse), "Home"]),
                h(Menu.Link, { href: "#search" }, () => [h(PhMagnifyingGlass), "Search"]),
                h(Menu.Link, { href: "#archive" }, () => [h(PhArchive), "Archive"]),
              ]),
            ]),
          ]),
        ]);
    },
  }),
});
