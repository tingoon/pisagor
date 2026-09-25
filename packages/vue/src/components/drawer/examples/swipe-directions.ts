import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Drawer } from "..";

export default defineComponent({
  name: "SwipeDirections",
  setup() {
    return () =>
      h("div", { class: "flex flex-wrap justify-center gap-2" }, [
        h(Drawer, { swipeDirection: "down" }, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "Bottom",
            ),
          ),
          h(Drawer.Content, null, () => [
            h(Drawer.Header, { title: "Bottom drawer" }),
            h(Drawer.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Swipe down to close this drawer.",
              ),
            ),
          ]),
        ]),
        h(Drawer, { swipeDirection: "up" }, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h("button", { class: outlineButtonClass(), type: "button" }, "Top"),
          ),
          h(Drawer.Content, null, () => [
            h(Drawer.Header, { title: "Top drawer" }),
            h(Drawer.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Swipe up to close this drawer.",
              ),
            ),
          ]),
        ]),
        h(Drawer, { swipeDirection: "start" }, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "Left",
            ),
          ),
          h(Drawer.Content, null, () => [
            h(Drawer.Header, { title: "Start drawer" }),
            h(Drawer.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Swipe left to close this drawer.",
              ),
            ),
          ]),
        ]),
        h(Drawer, { swipeDirection: "end" }, () => [
          h(Drawer.Trigger, { asChild: true }, () =>
            h(
              "button",
              { class: outlineButtonClass(), type: "button" },
              "Right",
            ),
          ),
          h(Drawer.Content, null, () => [
            h(Drawer.Header, { title: "End drawer" }),
            h(Drawer.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Swipe right to close this drawer.",
              ),
            ),
          ]),
        ]),
      ]);
  },
});
