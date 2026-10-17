import { Button, Dialog } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "CloseBehavior",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Dialog, { closeOnInteractOutside: false }, () => [
          h(Dialog.Trigger, { asChild: true }, () =>
            h(
              Button,
              { type: "button", variant: "outline" },
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
            h(
              Button,
              { type: "button", variant: "outline" },
              "No close on Escape",
            ),
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
