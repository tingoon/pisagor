import { Button, Dialog } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "NoCloseButton",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, { showCloseButton: false }, () =>
          h(Dialog.Header, {
            description:
              "You can only close this dialog using the buttons in the footer, by pressing Escape or by clicking the backdrop.",
            title: "No close button",
          }),
        ),
      ]);
  },
});
