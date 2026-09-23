import { defineComponent, h } from "vue";
import { NavigationMenu } from "..";

export default defineComponent({
  name: "Wrapping",
  setup() {
    return () =>
      h("div", { class: "w-72" }, () =>
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
});
