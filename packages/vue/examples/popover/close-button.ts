import { defineComponent, h } from "vue";
import { Popover } from "../../src/components/popover";
import { outlineButtonClass } from "../../src/internal/story-button";
import type { ArkPart } from "../../src/internal/types";

export default defineComponent({
  name: "CloseButton",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(
          Popover.Content as ArkPart,
          { class: "w-72", showCloseButton: true },
          () =>
            h(Popover.Header, {
              description:
                "You're all caught up. Check back later for new notifications.",
              title: "Notifications",
            }),
        ),
      ]);
  },
});
