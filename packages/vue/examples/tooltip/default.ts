import { PhTextB } from "@phosphor-icons/vue";
import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

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
