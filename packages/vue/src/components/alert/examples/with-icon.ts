import { PhSparkle } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Alert } from "..";

export default defineComponent({
  name: "WithIcon",
  setup() {
    return () =>
      h(Alert, {
        description:
          "Icons can be added to alerts to provide visual context and improve user experience.",
        icon: h(PhSparkle),
        title: "New feature available",
      });
  },
});
