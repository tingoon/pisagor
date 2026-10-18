import { Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Placements",
  setup() {
    const placements = ["left", "top", "bottom", "right"] as const;

    return () =>
      h(
        "div",
        { class: "flex flex-wrap justify-center gap-2" },
        placements.map((placement) =>
          h(Popover, { key: placement, positioning: { placement } }, () => [
            h(Popover.Trigger, { asChild: true }, () =>
              h(
                Button,
                {
                  type: "button",
                  variant: "outline",
                },
                () => placement.charAt(0).toUpperCase() + placement.slice(1),
              ),
            ),
            h(Popover.Content as ArkPart, { class: "w-56" }, () =>
              h(Popover.Header as ArkPart, {
                description: `This popover appears on the ${placement} placement of the trigger.`,
                title: "Popover",
              }),
            ),
          ]),
        ),
      );
  },
});
