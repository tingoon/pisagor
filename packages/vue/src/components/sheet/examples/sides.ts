import { defineComponent, h } from "vue";
import { outlineButtonClass } from "../../../internal/story-button";
import { Sheet } from "..";

const sidePlacements = [
  {
    body: "This sheet slides in from the right.",
    label: "Right",
    placement: "right" as const,
  },
  {
    body: "This sheet slides in from the left.",
    label: "Left",
    placement: "left" as const,
  },
  {
    body: "This sheet slides in from the top.",
    label: "Top",
    placement: "top" as const,
  },
  {
    body: "This sheet slides in from the bottom.",
    label: "Bottom",
    placement: "bottom" as const,
  },
];

export default defineComponent({
  name: "Sides",
  setup() {
    return () =>
      h(
        "div",
        { class: "flex flex-wrap justify-center gap-2" },
        sidePlacements.map((side) =>
          h(Sheet, { key: side.placement }, () => [
            h(Sheet.Trigger, { asChild: true }, () =>
              h(
                "button",
                { class: outlineButtonClass(), type: "button" },
                side.label,
              ),
            ),
            h(Sheet.Content, { placement: side.placement }, () => [
              h(Sheet.Header, { title: `${side.label} placement sheet` }),
              h(Sheet.Body, null, () =>
                h("p", { class: "text-muted-foreground text-sm" }, side.body),
              ),
            ]),
          ]),
        ),
      );
  },
});
