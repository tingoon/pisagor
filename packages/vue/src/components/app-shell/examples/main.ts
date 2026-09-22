import { defineComponent, h } from "vue";
import { AppShell } from "..";
import { loremParagraphs, regionTitle } from "./helpers";

export default defineComponent({
  name: "Main",
  setup() {
    return () =>
      h(AppShell, null, () => [
        h(AppShell.Navigation, null, () => regionTitle("Navigation")),
        h(AppShell.Main, null, () => [
          h(AppShell.Header, null, () => regionTitle("Header")),
          h(AppShell.Content, null, () => [
            regionTitle("Main"),
            ...loremParagraphs(8).map((paragraph, index) =>
              h("p", { key: index, style: { fontSize: "15px" } }, paragraph),
            ),
          ]),
        ]),
      ]);
  },
});
