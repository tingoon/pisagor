import { Badge } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Announcement } from "..";
export default defineComponent({
  name: "Compound",
  setup() {
    return () =>
      h(Announcement.Root, null, () => [
        h(Badge, null, () => "Release"),
        h(
          Announcement.Title,
          null,
          () => "v2.1.0 — Dark mode, faster builds, and 12 new components",
        ),
      ]);
  },
});
