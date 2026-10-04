import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Placements",
  setup() {
    const placements = ["left", "top", "bottom", "right"] as const;

    return () =>
      h(
        "div",
        { class: "flex flex-wrap items-center justify-center gap-2" },
        placements.map((placement) =>
          h(
            Tooltip as ArkPart,
            {
              children: h(
                Button as ArkPart,
                { class: "capitalize", variant: "outline" },
                () => placement,
              ),
              content: h("p", null, "Add to library"),
              key: placement,
              positioning: { placement },
            },
            () => undefined,
          ),
        ),
      );
  },
});
