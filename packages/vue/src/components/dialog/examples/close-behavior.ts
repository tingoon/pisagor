import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Dialog } from "..";

export default defineComponent({
  name: "CloseBehavior",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Dialog, { closeOnInteractOutside: false }, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "No close on outside click",
            ),
          ),
          h(Dialog.Content, { size: "sm" }, () =>
            h(Dialog.Header, {
              description:
                "Clicking outside does not close this dialog. Press ESC or use the button to close.",
              title: "Stays on outside click",
            }),
          ),
        ]),
        h(Dialog, { closeOnEscape: false }, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "No close on Escape"),
          ),
          h(Dialog.Content, { size: "sm" }, () =>
            h(Dialog.Header, {
              description:
                "Pressing Escape does not close this dialog. Click outside or use the close button.",
              title: "Escape key unavailable",
            }),
          ),
        ]),
      ]);
  },
});
