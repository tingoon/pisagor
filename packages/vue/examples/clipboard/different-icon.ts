import { PhSparkle } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Clipboard } from "../../src/components/clipboard";

export default defineComponent({
  name: "DifferentIcon",
  setup() {
    return () =>
      h(Clipboard, {
        copiedIcon: h(PhSparkle),
        copyIcon: h(PhSparkle),
        value: "https://example.com/docs",
        variant: "button",
      });
  },
});
