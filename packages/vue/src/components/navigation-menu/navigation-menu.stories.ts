import { NavigationMenu } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component: "Horizontal list of navigation links for primary site sections.",
      },
    },
  },
  subcomponents: {
    Item: NavigationMenu.Item,
    Link: NavigationMenu.Link,
    List: NavigationMenu.List,
    Root: NavigationMenu.Root,
  },
  title: "Components/Navigation/Navigation Menu",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(NavigationMenu, { "aria-label": "Main" }, () =>
          h(NavigationMenu.List, null, () => [
            h(NavigationMenu.Item, null, () =>
              h(NavigationMenu.Link, { active: true, href: "#home" }, () => "Home"),
            ),
            h(NavigationMenu.Item, null, () =>
              h(NavigationMenu.Link, { href: "#docs" }, () => "Docs"),
            ),
            h(NavigationMenu.Item, null, () =>
              h(NavigationMenu.Link, { href: "#about" }, () => "About"),
            ),
          ]),
        );
    },
  }),
});

export const Wrapping = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "max-w-xs" }, () =>
          h(NavigationMenu, { "aria-label": "Section" }, () =>
            h(NavigationMenu.List, null, () => [
              h(NavigationMenu.Item, null, () =>
                h(NavigationMenu.Link, { active: true, href: "#all" }, () => "All"),
              ),
              h(NavigationMenu.Item, null, () =>
                h(NavigationMenu.Link, { href: "#design" }, () => "Design"),
              ),
              h(NavigationMenu.Item, null, () =>
                h(NavigationMenu.Link, { href: "#development" }, () => "Development"),
              ),
              h(NavigationMenu.Item, null, () =>
                h(NavigationMenu.Link, { href: "#operations" }, () => "Operations"),
              ),
              h(NavigationMenu.Item, null, () =>
                h(NavigationMenu.Link, { href: "#support" }, () => "Support"),
              ),
            ]),
          ),
        );
    },
  }),
});
