import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Panels",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => regionTitle("Navigation")),

        h(AppShell.Panel, { defaultOpen: true, placement: "start" }, () => [
          h(AppShell.PanelHeader, null, () =>
            regionTitle("Start panel header"),
          ),
          h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
          h(AppShell.PanelFooter, null, () =>
            regionTitle("Start panel footer"),
          ),
        ]),

        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => [
            h(AppShell.PanelTrigger, {
              "aria-label": "Toggle start panel",
              placement: "start",
            }),
            h(AppShell.PanelTrigger, {
              "aria-label": "Toggle end panel",
              placement: "end",
            }),
          ]),
          mainContent("Main"),
        ]),

        h(AppShell.Panel, { defaultOpen: true, placement: "end" }, () => [
          h(AppShell.PanelHeader, null, () => regionTitle("End panel header")),
          h(AppShell.PanelContent, null, () => regionTitle("End panel")),
          h(AppShell.PanelFooter, null, () => regionTitle("End panel footer")),
        ]),
      ]);
  },
});
