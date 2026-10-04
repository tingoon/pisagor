import { defineComponent, h } from "vue";
import { AppShell } from "../../src/components/app-shell";
import { ActiveRailPanelContent, mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Rails",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(
          AppShell.Rail,
          { defaultActiveRailId: "home", placement: "start" },
          () => [
            h(
              AppShell.RailItem,
              { opensPanel: true, railId: "home", tooltip: "Home" },
              () => "H",
            ),
            h(
              AppShell.RailItem,
              { opensPanel: true, railId: "search", tooltip: "Search" },
              () => "S",
            ),
            h(
              AppShell.RailItem,
              { opensPanel: true, railId: "settings", tooltip: "Settings" },
              () => "G",
            ),
          ],
        ),

        h(AppShell.Panel, { placement: "start" }, () =>
          h(ActiveRailPanelContent),
        ),

        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => regionTitle("Header")),
          mainContent("Main"),
        ]),

        h(
          AppShell.Rail,
          { defaultActiveRailId: "notes", placement: "end" },
          () => [
            h(
              AppShell.RailItem,
              { railId: "notes", tooltip: "Notes" },
              () => "N",
            ),
            h(
              AppShell.RailItem,
              { railId: "chat", tooltip: "Chat" },
              () => "C",
            ),
          ],
        ),
      ]);
  },
});
