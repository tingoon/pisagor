import { Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "CloseButton",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
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
