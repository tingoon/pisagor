import { Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Modal",
  setup() {
    return () =>
      h(Popover, { modal: true }, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
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
