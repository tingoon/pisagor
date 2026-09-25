import { PhTextB } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import type { ArkPart } from "../../../internal/types";
import { Tooltip } from "..";
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
