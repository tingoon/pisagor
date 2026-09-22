import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Sheet } from "..";

export default defineComponent({
  name: "CloseBehavior",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Sheet, { closeOnInteractOutside: false }, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "No close on outside click",
            ),
          ),
          h(Sheet.Content, null, () =>
            h(Sheet.Header, {
              description:
                "Clicking outside does not close this sheet. Press ESC or use the close button.",
              title: "Stays on outside click",
            }),
          ),
        ]),
        h(Sheet, { closeOnEscape: false }, () => [
          h(Sheet.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "No close on Escape"),
          ),
          h(Sheet.Content, null, () =>
            h(Sheet.Header, {
              description:
                "Pressing Escape does not close this sheet. Click outside or use the close button.",
              title: "Escape key unavailable",
            }),
          ),
        ]),
      ]);
  },
});
