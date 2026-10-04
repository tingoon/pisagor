import { PhArrowUpRight } from "@phosphor-icons/vue";
import { Announcement } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "WithoutBadge",
  setup() {
    return () =>
      h(Announcement, {
        title: [
          "New features added, check the logs for more details.",
          h(PhArrowUpRight),
        ],
      });
  },
});
