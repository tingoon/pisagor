import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Popover } from "..";

export default defineComponent({
  name: "Nested",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
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
                  "button",
                  {
                    class: cn(
                      buttonRecipe({ size: "sm", variant: "outline" }).base(),
                    ),
                    type: "button",
                  },
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
