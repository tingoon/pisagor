import { defineComponent, h } from "vue";
import { Dialog } from "../../src/components/dialog";
import { outlineButtonClass } from "../../src/internal/story-button";

export default defineComponent({
  name: "NoCloseButton",
  setup() {
    return () =>
      h(Dialog, null, () => [
        h(Dialog.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
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
