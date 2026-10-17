import { Button, Dialog } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Dialog.Content, null, () => [
          h(Dialog.Header, {
            description: "Make changes to your project settings.",
            title: "Edit project",
          }),
          h(Dialog.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "Dialog body content.",
            ),
          ),
          h(Dialog.Footer, null, () => [
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Cancel"),
            ),
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Save"),
            ),
          ]),
        ]),
      ]);
  },
});
