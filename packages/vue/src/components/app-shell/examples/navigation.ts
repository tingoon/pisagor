import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Navigation",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => regionTitle("Navigation")),
        h(AppShell.Main, null, () => mainContent("Main")),
      ]);
  },
});
