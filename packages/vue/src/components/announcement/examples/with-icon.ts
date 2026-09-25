import { PhSparkle } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";
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
