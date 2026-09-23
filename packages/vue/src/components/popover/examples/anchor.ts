import { Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Popover } from "..";
export default defineComponent({
  name: "Anchor",
  setup() {
    return () =>
      h("div", null, [
        h(Popover, null, () =>
          h("div", { class: "flex items-center gap-2" }, [
            h(Popover.Trigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
            ),
            h(Popover.Anchor, { asChild: true }, () =>
              h(Input as ArkPart, { class: "w-full", placeholder: "jane.doe@example.com" }),
            ),
            h(Popover.Content as ArkPart, { class: "w-56" }, () =>
              h(Popover.Header, {
                description: "We'll send you a link to reset your password.",
                title: "Enter your email",
              }),
            ),
          ]),
        ),
      ]);
  },
});
