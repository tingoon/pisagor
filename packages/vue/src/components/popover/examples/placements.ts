import { cn } from "@pisagor/utils";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Popover } from "..";

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
                "button",
                { class: cn(outlineButtonClass(), "capitalize"), type: "button" },
                placement,
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
