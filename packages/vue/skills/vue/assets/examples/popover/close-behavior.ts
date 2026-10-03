import { defineComponent, h } from "vue";
import { Popover } from "../../../../../src/components/popover";
import { outlineButtonClass } from "../../../../../src/internal/story-button";

export default defineComponent({
  name: "CloseBehavior",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Popover, { closeOnInteractOutside: false }, () => [
          h(Popover.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
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
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "Open escape",
            ),
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
