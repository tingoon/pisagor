import { Badge } from "@pisagor/vue/badge";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const LabelAccessory = defineComponent({
  inheritAttrs: false,
  name: "LabelAccessory",
  setup() {
    return () =>
      h(Field as ArkPart, null, () => [
        h(Field.Label as ArkPart, { class: "flex items-center gap-2" }, () => [
          "Webhook URL",
          h(Badge as ArkPart, { class: "ml-auto", variant: "info" }, () => "Beta"),
        ]),
        h(Input as ArkPart, { placeholder: "https://example.com/webhook" }),
      ]);
  },
});
