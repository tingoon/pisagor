import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Inspectors",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => [
          h("div", { class: "flex items-center gap-2" }, [
            h(AppShell.InspectorTrigger, {
              "aria-label": "Toggle start inspector",
              placement: "start",
            }),
            regionTitle("Navigation"),
            h(AppShell.InspectorTrigger, {
              "aria-label": "Toggle end inspector",
              placement: "end",
            }),
          ]),
        ]),

        h(AppShell.Inspector, { defaultOpen: true, placement: "start" }, () => [
          h(AppShell.InspectorHeader, null, () => regionTitle("Start inspector header")),
          h(AppShell.InspectorContent, null, () => regionTitle("Start inspector")),
          h(AppShell.InspectorFooter, null, () => regionTitle("Start inspector footer")),
        ]),

        h(AppShell.Main, null, () => mainContent("Main")),

        h(AppShell.Inspector, { defaultOpen: true, placement: "end" }, () => [
          h(AppShell.InspectorHeader, null, () => regionTitle("End inspector header")),
          h(AppShell.InspectorContent, null, () => regionTitle("End inspector")),
          h(AppShell.InspectorFooter, null, () => regionTitle("End inspector footer")),
        ]),
      ]);
  },
});
