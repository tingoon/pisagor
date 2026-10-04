import { Button, Sheet } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Sheet.Content, null, () => [
          h(Sheet.Header, {
            description:
              "Make changes to your account here. Click save when you're done.",
            title: "Edit user",
          }),
          h(Sheet.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "Sheet body content.",
            ),
          ),
          h(Sheet.Footer, null, () =>
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Save changes"),
            ),
          ),
        ]),
      ]);
  },
});
