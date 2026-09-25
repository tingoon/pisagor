import { PhGear, PhSignOut, PhUser } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Menu } from "..";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(
        "div",
        { class: "w-56 rounded-xl border bg-background p-1 shadow-xs/5" },
        [
          h(Menu, { "aria-label": "Account" }, () =>
            h(Menu.List, null, () => [
              h(Menu.Link, { active: true, href: "#profile" }, () => [
                h(PhUser),
                "Profile",
              ]),
              h(Menu.Link, { href: "#settings" }, () => [
                h(PhGear),
                "Settings",
              ]),
              h(Menu.Separator),
              h(Menu.Item, null, () => [
                h(PhSignOut),
                "Sign out",
                h(Menu.Shortcut, null, () => "⇧⌘Q"),
              ]),
            ]),
          ),
        ],
      );
  },
});
