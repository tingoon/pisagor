import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import type { ArkPart } from "../../../internal/types";
import { Popover } from "..";

export default defineComponent({
  name: "ScrollArea",
  setup() {
    const items = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      label: `Item ${i + 1}`,
    }));

    return () =>
      h(Popover, null, () => [
        h(Popover.Trigger, { asChild: true }, () =>
          h("button", { class: outlineButtonClass(), type: "button" }, "Open"),
        ),
        h(Popover.Content as ArkPart, { class: "h-80 w-72" }, () => [
          h(Popover.Header, { title: "Scrollable content" }),
          h(Popover.Body, null, () =>
            h(
              "ul",
              { class: "flex flex-col gap-1" },
              items.map((item) =>
                h(
                  "li",
                  { class: "rounded-md px-2 py-1.5 text-sm hover:bg-muted", key: item.id },
                  item.label,
                ),
              ),
            ),
          ),
          h(Popover.Footer, null, () =>
            h(Popover.CloseTrigger, { asChild: true }, () =>
              h("button", { class: outlineButtonClass(), type: "button" }, "Close"),
            ),
          ),
        ]),
      ]);
  },
});
