import { defineComponent, h } from "vue";
import { Drawer } from "../../../../../src/components/drawer";
import { outlineButtonClass } from "../../../../../src/internal/story-button";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Drawer, null, () => [
        h(Drawer.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Drawer.Content, null, () =>
          h(Drawer.ContentInner, null, () => [
            h(Drawer.Header, {
              description:
                "Make changes to your account here. Swipe down to close.",
              title: "Edit profile",
            }),
            h(Drawer.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Drawer body content.",
              ),
            ),
            h(Drawer.Footer, null, () =>
              h(Drawer.CloseTrigger, { asChild: true }, () =>
                h(
                  "button",
                  { class: outlineButtonClass(), type: "button" },
                  "Save",
                ),
              ),
            ),
          ]),
        ),
      ]);
  },
});
