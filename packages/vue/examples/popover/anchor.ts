import { Button, Input, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Anchor",
  setup() {
    return () =>
      h("div", null, [
        h(Popover, null, () =>
          h("div", { class: "flex items-center gap-2" }, [
            h(Popover.Trigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Open"),
            ),
            h(Popover.Anchor, { asChild: true }, () =>
              h(Input as ArkPart, {
                class: "w-full",
                placeholder: "jane.doe@example.com",
              }),
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
