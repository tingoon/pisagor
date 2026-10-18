import { Button, Tooltip } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export default defineComponent({
  name: "Disabled",
  setup() {
    return () =>
      h(
        Tooltip as ArkPart,
        {
          children: (triggerProps: Record<string, unknown>) =>
            h(
              "span",
              triggerProps,
              h(
                Button as ArkPart,
                { disabled: true, variant: "outline" },
                () => "Unavailable",
              ),
            ),
          content: h(
            "p",
            null,
            "You can still show a tooltip on an unavailable element",
          ),
        },
        () => undefined,
      );
  },
});
