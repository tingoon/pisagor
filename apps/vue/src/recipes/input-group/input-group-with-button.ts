import { InputGroup } from "@pisagor/vue/input-group";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupWithButton = defineComponent({
  inheritAttrs: false,
  name: "InputGroupWithButton",
  setup() {
    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(InputGroup.Input as ArkPart, { placeholder: "Your email", type: "email" }),
        h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
          h(
            InputGroup.Button as ArkPart,
            { size: "xs", type: "button", variant: "ghost" },
            () => "Subscribe",
          ),
        ),
      ]);
  },
});
