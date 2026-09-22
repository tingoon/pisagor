import { PhArchive, PhHouse, PhMagnifyingGlass } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Menu } from "..";

export default defineComponent({
  name: "WithGroups",
  setup() {
    return () =>
      h("div", { class: "w-56 rounded-xl border p-1 shadow-xs/5" }, [
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
});
