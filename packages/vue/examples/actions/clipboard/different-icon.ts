import { PhSparkle } from "@phosphor-icons/vue";
import { Clipboard } from "@pisagor/vue";
import { defineComponent, h } from "vue";

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
