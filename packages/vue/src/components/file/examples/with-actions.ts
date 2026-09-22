import { PhDownloadSimple, PhTrash } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { File } from "..";
export default defineComponent({
  name: "WithActions",
  setup() {
    return () =>
      h(File, {
        actions: [
          h(Button, { "aria-label": "Download", size: "icon-xs", variant: "ghost" }, () =>
            h(PhDownloadSimple),
          ),
          h(Button, { "aria-label": "Remove", size: "icon-xs", variant: "ghost" }, () =>
            h(PhTrash),
          ),
        ],
        meta: "PNG image",
        name: "hero-banner.png",
        size: 1_048_576,
      });
  },
});
