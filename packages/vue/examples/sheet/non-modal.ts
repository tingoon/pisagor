import { Button, Sheet } from "@pisagor/vue";
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "NonModal",
  setup() {
    return () =>
      h(Sheet, { modal: false }, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h(Button, { type: "button", variant: "outline" }, "Open"),
        ),
        h(Sheet.Content, null, () => [
          h(Sheet.Header, {
            description:
              "This is a non-modal sheet. You can interact with elements outside the sheet.",
            title: "Non-modal sheet",
          }),
          h(Sheet.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "Non-modal sheets allow interaction with elements outside. Focus trapping and scroll prevention are turned off.",
            ),
          ),
          h(Sheet.Footer, null, () =>
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h(Button, { type: "button", variant: "outline" }, "Close"),
            ),
          ),
        ]),
      ]);
  },
});
