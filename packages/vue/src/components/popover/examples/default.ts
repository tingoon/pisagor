import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Popover } from "..";

export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Popover.Content, null, () =>
          h("div", { class: "w-80" }, [
            h(Popover.Header, {
              description: "Set the dimensions for the layer.",
              title: "Dimensions",
            }),
            h(Popover.Body, null, () =>
              h(
                "p",
                { class: "text-muted-foreground text-sm" },
                "Popover body content.",
              ),
            ),
          ]),
        ),
      ]);
  },
});
