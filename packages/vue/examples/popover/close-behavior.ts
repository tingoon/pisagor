import { Button, Popover } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "CloseBehavior",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Popover, { closeOnInteractOutside: false }, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h(
              Button,
              { type: "button", variant: "outline" },
              "Open outside click",
            ),
          ),
          h(Popover.Content, { showCloseButton: true }, () =>
            h(Popover.Header, {
              description:
                "Clicking outside does not close this popover. Press ESC to close.",
              title: "Stays on outside click",
            }),
          ),
        ]),
        h(Popover, { closeOnEscape: false }, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h(Button, { type: "button", variant: "outline" }, "Open escape"),
          ),
          h(Popover.Content, { showCloseButton: true }, () =>
            h(Popover.Header, {
              description:
                "Pressing escape does not close this popover. Click outside to close.",
              title: "Escape key unavailable",
            }),
          ),
        ]),
      ]);
  },
});
