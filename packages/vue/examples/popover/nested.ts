import { Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Nested",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Popover.Content, null, () => [
          h(Popover.Header, {
            description: "Check your notifications.",
            title: "Notifications",
          }),
          h(Popover.Body, null, () =>
            h(Popover, null, () => [
              h(Popover.Trigger, { asChild: true }, () =>
                h(
                  Button,
                  { size: "sm", type: "button", variant: "outline" },
                  "Open nested",
                ),
              ),
              h(Popover.Content as ArkPart, { class: "w-56" }, () =>
                h(Popover.Header, {
                  description:
                    "You're all caught up. Check back later for new notifications.",
                  title: "Nested popover",
                }),
              ),
            ]),
          ),
        ]),
      ]);
  },
});
