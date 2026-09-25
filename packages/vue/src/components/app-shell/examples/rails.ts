import { useAppShell } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";
export default defineComponent({
  name: "Rails",
  setup() {
    const ActiveRailPanelContent = defineComponent({
      name: "ActiveRailPanelContent",
      setup() {
        const context = useAppShell();

        return () => {
          if (!context) return null;
          const { railStates } = context;

          return h(AppShell.PanelContent, null, () =>
            regionTitle(
              railStates.start?.activeRailId
                ? `Panel: ${railStates.start.activeRailId}`
                : "Panel",
            ),
          );
        };
      },
    });
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
