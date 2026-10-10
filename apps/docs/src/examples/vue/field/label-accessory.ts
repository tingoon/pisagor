import { Badge, Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { labelAccessoryBlock } from "#/recipes/blocks/field";

const styles = labelAccessoryBlock();

type ArkPart = Parameters<typeof h>[0];

export const LabelAccessory = defineComponent({
  inheritAttrs: false,
  name: "LabelAccessory",
  setup() {
    return () =>
      h(Field as ArkPart, null, () => [
        h(Field.Label as ArkPart, { class: styles.label() }, () => [
          "Webhook URL",
          h(
            Badge as ArkPart,
            { class: styles.badge(), variant: "info" },
            () => "Beta",
          ),
        ]),
        h(Input as ArkPart, { placeholder: "https://example.com/webhook" }),
      ]);
  },
});
