import { PhTextB } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { Tooltip } from "../../../../../src/components/tooltip";
import type { ArkPart } from "../../../../../src/internal/types";
export default defineComponent({
  name: "Default",
  setup() {
    return () =>
      h(
        Tooltip as ArkPart,
        {
          children: h(
            Button as ArkPart,
            { size: "icon-md", variant: "outline" },
            () => h(PhTextB),
          ),
          content: "Bold",
        },
        () => undefined,
      );
  },
});
