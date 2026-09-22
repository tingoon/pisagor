import { PhHouse, PhMagnifyingGlass, PhUser } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Sidebar } from "..";
export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Sidebar.Provider, null, () => [
        h(Sidebar, { collapsible: "icon", variant: "inset" }, () => [
          h(Sidebar.Header, { class: "border-b" }, () =>
            h(Sidebar.Menu, null, () =>
              h(Sidebar.MenuItem, null, () =>
                h(Sidebar.MenuButton, { size: "lg" }, () => [
                  h(
                    "div",
                    {
                      class:
                        "flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
                    },
                    () => h(PhHouse, { class: "size-4" }),
                  ),
                  h("span", { class: "truncate font-semibold" }, "Pisagor"),
                ]),
              ),
            ),
          ),
          h(Sidebar.Content, null, () =>
            h(Sidebar.Group, null, () => [
              h(Sidebar.GroupLabel, null, () => "Navigation"),
              h(Sidebar.GroupContent, null, () =>
                h(Sidebar.Menu, null, () => [
                  h(Sidebar.MenuItem, null, () =>
                    h(Sidebar.MenuButton, { isActive: true }, () => [
                      h(PhHouse),
                      h("span", null, "Home"),
                    ]),
                  ),
                  h(Sidebar.MenuItem, null, () =>
                    h(Sidebar.MenuButton, null, () => [
                      h(PhMagnifyingGlass),
                      h("span", null, "Search"),
                    ]),
                  ),
                ]),
              ),
            ]),
          ),
          h(Sidebar.Footer, { class: "border-t" }, () =>
            h(Sidebar.Menu, null, () =>
              h(Sidebar.MenuItem, null, () =>
                h(Sidebar.MenuButton, null, () => [h(PhUser), h("span", null, "Account")]),
              ),
            ),
          ),
          h(Sidebar.Rail),
        ]),
        h(Sidebar.Inset, null, () => [
          h("header", { class: "flex h-12 items-center gap-2 border-b px-4" }, () => [
            h(Sidebar.Trigger),
            h("span", { class: "font-medium text-sm" }, "Dashboard"),
          ]),
          h("div", { class: "flex flex-1 flex-col gap-2 p-4" }, () => [
            h("p", { class: "text-muted-foreground text-sm" }, "Main content area"),
            h(
              Button as Parameters<typeof h>[0],
              { class: "w-fit", variant: "outline" },
              () => "Example action",
            ),
          ]),
        ]),
      ]);
  },
});
