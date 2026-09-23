import { defineComponent, h } from "vue";
import { NavigationMenu } from "..";

export default defineComponent({
  name: "Default",
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
});
