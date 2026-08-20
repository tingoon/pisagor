import { PhBell, PhDatabase, PhHouse, PhMagnifyingGlass, PhUser } from "@phosphor-icons/vue";
import { Avatar, Button, Navbar, Sidebar } from "@pisagor/vue";
import { h } from "vue";
import preview from "#/vue/preview";

type ArkPart = Parameters<typeof h>[0];

const meta = preview.meta({
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: "Top app bar with brand, navigation, and action regions.",
      },
    },
  },
  subcomponents: {
    Actions: Navbar.Actions,
    Brand: Navbar.Brand,
    Content: Navbar.Content,
    Nav: Navbar.Nav,
    Root: Navbar.Root,
  },
  title: "Components/Navigation/Navbar",
});

export const Default = meta.story({
  render: () => ({
    components: { Navbar },
    template: `
      <Navbar class="border-b px-4">
        <Navbar.Brand><span class="font-semibold">Pisagor</span></Navbar.Brand>
        <Navbar.Content>
          <Navbar.Nav>
            <a class="px-3 py-2 text-sm" href="#home">Home</a>
            <a class="px-3 py-2 text-sm" href="#docs">Docs</a>
          </Navbar.Nav>
        </Navbar.Content>
        <Navbar.Actions>
          <button class="rounded-lg border px-3 py-1.5 text-sm" type="button">Sign in</button>
        </Navbar.Actions>
      </Navbar>
    `,
  }),
});

export const WithSidebar = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Dashboard layout combining Navbar and Sidebar with a collapsible start rail.",
      },
    },
  },
  render: () => () =>
    h(Sidebar.Provider as ArkPart, null, () => [
      h(Sidebar as ArkPart, { collapsible: "icon", variant: "inset" }, () => [
        h(Sidebar.Header as ArkPart, { class: "border-b" }, () =>
          h(Sidebar.Menu as ArkPart, null, () =>
            h(Sidebar.MenuItem as ArkPart, null, () =>
              h(Sidebar.MenuButton as ArkPart, { size: "lg" }, () => [
                h(
                  "div",
                  {
                    class:
                      "flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
                  },
                  () => h(PhDatabase as ArkPart, { class: "size-4" }),
                ),
                h("span", { class: "truncate font-semibold" }, "Pisagor"),
              ]),
            ),
          ),
        ),
        h(Sidebar.Content as ArkPart, null, () =>
          h(Sidebar.Group as ArkPart, null, () => [
            h(Sidebar.GroupLabel as ArkPart, null, () => "Navigation"),
            h(Sidebar.GroupContent as ArkPart, null, () =>
              h(Sidebar.Menu as ArkPart, null, () => [
                h(Sidebar.MenuItem as ArkPart, null, () =>
                  h(Sidebar.MenuButton as ArkPart, { isActive: true }, () => [
                    h(PhHouse as ArkPart),
                    h("span", null, "Home"),
                  ]),
                ),
                h(Sidebar.MenuItem as ArkPart, null, () =>
                  h(Sidebar.MenuButton as ArkPart, null, () => [
                    h(PhMagnifyingGlass as ArkPart),
                    h("span", null, "Search"),
                  ]),
                ),
              ]),
            ),
          ]),
        ),
        h(Sidebar.Footer as ArkPart, { class: "border-t" }, () =>
          h(Sidebar.Menu as ArkPart, null, () =>
            h(Sidebar.MenuItem as ArkPart, null, () =>
              h(Sidebar.MenuButton as ArkPart, null, () => [
                h(PhUser as ArkPart),
                h("span", null, "Account"),
              ]),
            ),
          ),
        ),
        h(Sidebar.Rail as ArkPart),
      ]),
      h(Sidebar.Inset as ArkPart, null, () => [
        h(Navbar as ArkPart, null, () => [
          h(Navbar.Brand as ArkPart, { class: "gap-3" }, () => [
            h(Sidebar.Trigger as ArkPart),
            h("span", { class: "font-medium text-sm" }, "Dashboard"),
          ]),
          h(Navbar.Content as ArkPart, { class: "justify-end" }, () =>
            h(Navbar.Actions as ArkPart, null, () => [
              h(
                Button as ArkPart,
                { "aria-label": "Notifications", size: "icon-sm", variant: "ghost" },
                () => h(PhBell as ArkPart),
              ),
              h(Avatar as ArkPart, { fallback: "JD", size: "sm" }),
            ]),
          ),
        ]),
        h("div", { class: "flex flex-1 flex-col gap-2 p-4" }, () =>
          h("p", { class: "text-muted-foreground text-sm" }, "Main content area"),
        ),
      ]),
    ]),
});
