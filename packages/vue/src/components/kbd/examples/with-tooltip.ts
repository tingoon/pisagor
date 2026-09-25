import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Kbd } from "..";
export default defineComponent({
  name: "WithTooltip",
  setup() {
    return () =>
      h(Tooltip as ArkPart, {
        children: h(
          Button as ArkPart,
          { size: "sm", variant: "outline" },
          () => "Dark mode",
        ),
        classNames: { content: "flex items-center gap-2" },
        content: [
          "Toggle mode",
          h(Kbd.Group as ArkPart, { class: "ml-1.5 inline" }, () =>
            h(Kbd as ArkPart, null, () => "D"),
          ),
        ],
      });
  },
});
