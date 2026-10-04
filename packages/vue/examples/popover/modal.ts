import { defineComponent, h } from "vue";
import { Popover } from "../../src/components/popover";
import { outlineButtonClass } from "../../src/internal/story-button";

export default defineComponent({
  name: "Modal",
  setup() {
    return () =>
      h(Popover, { modal: true }, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Popover.Content, null, () =>
          h(Popover.Header, {
            description:
              "You're all caught up. Check back later for new notifications.",
            title: "Notifications",
          }),
        ),
      ]);
  },
});
