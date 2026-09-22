import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { AlertDialog } from "..";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(AlertDialog, null, () => [
        h(AlertDialog.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(AlertDialog.Content, null, () => [
          h(AlertDialog.Header, {
            description: "Do you want to allow the USB accessory to connect to this device?",
            title: "Allow accessory to connect?",
          }),
          h(AlertDialog.Footer, null, () => [
            h(AlertDialog.Cancel, null, () => "Don't allow"),
            h(AlertDialog.CloseTrigger, { asChild: true }, () =>
              h(AlertDialog.Action, null, () => "Allow"),
            ),
          ]),
        ]),
      ]);
  },
});
