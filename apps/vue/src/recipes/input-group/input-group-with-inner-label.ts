import { PhInfo } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Field } from "@pisagor/vue/field";
import { InputGroup } from "@pisagor/vue/input-group";
import { Tooltip } from "@pisagor/vue/tooltip";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupWithInnerLabel = defineComponent({
  inheritAttrs: false,
  name: "InputGroupWithInnerLabel",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Input as ArkPart, { placeholder: "John Doe" }),
        h(InputGroup.Addon as ArkPart, { align: "block-start" }, () => [
          h(Field.Label as ArkPart, null, () => "Username"),
          h(Tooltip as ArkPart, {
            children: h(
              Button as ArkPart,
              {
                "aria-label": "More info",
                class: "ms-auto rtl:me-auto",
                size: "icon-xs",
                type: "button",
                variant: "ghost",
              },
              () => h(PhInfo, { "aria-hidden": true }),
            ),
            content: "Enter a username for your account",
          }),
        ]),
      ]);
  },
});
