import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Banner, null, () => regionTitle("Banner")),

        h(AppShell.Navigation, null, () => regionTitle("Navigation")),

        h(AppShell.Rail, { defaultActiveRailId: "home", placement: "start" }, () => [
          h(AppShell.RailItem, { opensPanel: true, railId: "home", tooltip: "Home" }, () => "H"),
          h(
            AppShell.RailItem,
            { opensPanel: true, railId: "search", tooltip: "Search" },
            () => "S",
          ),
        ]),

        h(AppShell.Panel, { defaultOpen: true }, () => [
          h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
        ]),

        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => [
            h(AppShell.PanelTrigger, { "aria-label": "Toggle start panel" }),
            h("div", { class: "flex min-w-0 flex-1 justify-center" }, [regionTitle("Header")]),
          ]),
          mainContent("Content"),
        ]),

        h(AppShell.Rail, { defaultActiveRailId: "notes", placement: "end" }, () => [
          h(AppShell.RailItem, { railId: "notes", tooltip: "Notes" }, () => "N"),
          h(AppShell.RailItem, { railId: "chat", tooltip: "Chat" }, () => "C"),
        ]),
      ]);
  },
});
