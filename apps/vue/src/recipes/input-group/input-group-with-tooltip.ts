import { PhInfo } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { InputGroup } from "@pisagor/vue/input-group";
import { Tooltip } from "@pisagor/vue/tooltip";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupWithTooltip = defineComponent({
  inheritAttrs: false,
  name: "InputGroupWithTooltip",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Input as ArkPart, { placeholder: "Enter value" }),
        h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
          h(
            Tooltip as ArkPart,
            {
              children: h(
                Button as ArkPart,
                { "aria-label": "More info", size: "icon-xs", type: "button", variant: "ghost" },
                () => h(PhInfo, { "aria-hidden": true }),
              ),
              content: "Additional information about this field",
            },
            () => undefined,
          ),
        ),
      ]);
  },
});
