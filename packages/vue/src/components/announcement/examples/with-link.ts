import { PhArrowUpRight } from "@phosphor-icons/vue";
import { Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";
export default defineComponent({
  name: "WithLink",
  setup() {
    return () =>
      h(Announcement.Root, { asChild: true }, () =>
        h("a", { href: "/" }, [
          h(Badge, null, () => "Latest update"),
          h(Announcement.Title, null, () => [
            "New feature added",
            h(PhArrowUpRight, { "aria-hidden": true }),
          ]),
        ]),
      );
  },
});
