import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Popover } from "..";

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
            description: "You're all caught up. Check back later for new notifications.",
            title: "Notifications",
          }),
        ),
      ]);
  },
});
