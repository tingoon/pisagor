import { PhSparkle } from "@phosphor-icons/vue";
import { Alert } from "@pisagor/vue";
import { defineComponent, h } from "vue";

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
