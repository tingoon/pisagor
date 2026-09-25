import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Drawer } from "..";

export default defineComponent({
  name: "SnapPoints",
  setup() {
    return () =>
      h(
        Drawer,
        {
          defaultSnapPoint: 0.5,
          snapPoints: [0.25, 0.5, 1],
          snapToSequentialPoints: true,
        },
        () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "Open",
            ),
          ),
          h(Drawer.Content, null, () =>
            h(Drawer.ContentInner, null, () => [
              h(Drawer.Header, {
                description:
                  "Drag to 25%, 50%, or 100% height. Swipe down to close.",
                title: "Snap points",
              }),
              h(Drawer.Body, null, () =>
                h(
                  "p",
                  { class: "text-muted-foreground text-sm" },
                  "This drawer has multiple snap points. Try dragging the handle to quarter, half, or full height.",
                ),
              ),
            ]),
          ),
        ],
      );
  },
});
