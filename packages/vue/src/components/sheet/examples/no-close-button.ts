import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Sheet } from "..";

export default defineComponent({
  name: "NoCloseButton",
  setup() {
    return () =>
      h(Sheet, null, () => [
        h(Sheet.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Sheet.Content, { showCloseButton: false }, () => [
          h(Sheet.Header, {
            description:
              "You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop.",
            title: "No close button",
          }),
          h(Sheet.Body, null, () =>
            h(
              "p",
              { class: "text-muted-foreground text-sm" },
              "The close button in the top right corner is hidden. Use the footer buttons or press Escape to close.",
            ),
          ),
          h(Sheet.Footer, null, () => [
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Cancel"),
            ),
            h(Sheet.CloseTrigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Confirm"),
            ),
          ]),
        ]),
      ]);
  },
});
