import { Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";
export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Announcement, {
        badge: h(Badge, null, () => "Release"),
        title: "v2.1.0 — Dark mode, faster builds, and 12 new components",
      });
  },
});
