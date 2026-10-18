import { AlertDialog, Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Variants",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap gap-2" }, [
        h(AlertDialog, null, () => [
          h(AlertDialog.Trigger, { asChild: true }, () =>
            h(Button, { type: "button", variant: "outline" }, "Default"),
          ),
          h(AlertDialog.Content, null, () => [
            h(AlertDialog.Header, {
              description:
                "Do you want to allow the USB accessory to connect to this device?",
              title: "Allow accessory to connect?",
            }),
            h(AlertDialog.Footer, null, () => [
              h(AlertDialog.Cancel, null, () => "Don't allow"),
              h(AlertDialog.CloseTrigger, { asChild: true }, () =>
                h(AlertDialog.Action, { variant: "default" }, () => "Allow"),
              ),
            ]),
          ]),
        ]),
        h(AlertDialog, null, () => [
          h(AlertDialog.Trigger, { asChild: true }, () =>
            h(Button, { type: "button", variant: "outline" }, "Destructive"),
          ),
          h(AlertDialog.Content, null, () => [
            h(AlertDialog.Header, {
              description:
                "This action cannot be undone. This will permanently delete the project and remove all data.",
              title: "Delete project",
            }),
            h(AlertDialog.Footer, null, () => [
              h(AlertDialog.Cancel, null, () => "Cancel"),
              h(AlertDialog.CloseTrigger, { asChild: true }, () =>
                h(
                  AlertDialog.Action,
                  { variant: "destructive" },
                  () => "Delete project",
                ),
              ),
            ]),
          ]),
        ]),
      ]);
  },
});
