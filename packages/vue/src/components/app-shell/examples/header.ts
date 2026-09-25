import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Header",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => [
          h("div", { class: "flex items-center gap-2" }, [
            regionTitle("Navigation"),
            h(AppShell.InspectorTrigger, {
              "aria-label": "Toggle end inspector",
              placement: "end",
            }),
          ]),
        ]),

        h(AppShell.Panel, { defaultOpen: true, placement: "start" }, () => [
          h(AppShell.PanelContent, null, () => regionTitle("Start panel")),
        ]),

        h(AppShell.Inspector, { defaultOpen: true, placement: "end" }, () => [
          h(AppShell.InspectorContent, null, () =>
            regionTitle("End inspector"),
          ),
        ]),

        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => [
            h(AppShell.PanelTrigger, {
              "aria-label": "Toggle start panel",
              placement: "start",
            }),
            h("div", { class: "flex min-w-0 flex-1 justify-center" }, [
              regionTitle("Header"),
            ]),
          ]),
          mainContent("Main"),
        ]),
      ]);
  },
});
