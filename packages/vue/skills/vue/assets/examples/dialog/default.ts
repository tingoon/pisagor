import { defineComponent, h } from "vue";
import { Dialog } from "../../../../../src/components/dialog";
import { outlineButtonClass } from "../../../../../src/internal/story-button";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
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
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "Cancel",
              ),
            ),
            h(Dialog.CloseTrigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                "Save",
              ),
            ),
          ]),
        ]),
      ]);
  },
});
