import { Button, Dialog } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "NonModal",
  setup() {
    return () =>
      h(Dialog, { modal: false }, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, null, () => [
          h(Dialog.Header, {
            description:
              "This is a non-modal dialog. You can interact with elements outside the dialog.",
            title: "Non-modal dialog",
          }),
          h(Dialog.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "Non-modal dialogs allow interaction with elements outside the dialog. Focus trapping and scroll prevention are turned off.",
            ),
          ),
          h(Dialog.Footer, null, () =>
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Close"),
            ),
          ),
        ]),
      ]);
  },
});
