import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { mainContent, regionTitle } from "./helpers";

export default defineComponent({
  name: "Content",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => regionTitle("Navigation")),
        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => regionTitle("Header")),
          mainContent("Content"),
        ]),
      ]);
  },
});
