import { PhSparkle } from "@phosphor-icons/vue";
import { Announcement, Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "WithIcon",
  setup() {
    return () =>
      h(Announcement, {
        badge: h(Badge, { variant: "info" }, () => [
          h(PhSparkle),
          "New features",
        ]),
        title: "Dark mode and 12 new components available",
      });
  },
});
