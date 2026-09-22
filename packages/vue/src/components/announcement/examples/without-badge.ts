import { PhArrowUpRight } from "@phosphor-icons/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";

export default defineComponent({
  name: "WithoutBadge",
  setup() {
    return () =>
      h(Announcement, {
        title: ["New features added, check the logs for more details.", h(PhArrowUpRight)],
      });
  },
});
