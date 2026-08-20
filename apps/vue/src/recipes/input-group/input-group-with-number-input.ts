import { InputGroup, NumberInput } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const InputGroupWithNumberInput = defineComponent({
  inheritAttrs: false,
  name: "InputGroupWithNumberInput",
  setup() {
    const numberInputParts = NumberInput as unknown as { Input: ArkPart };

    return () =>
      h(InputGroup as ArkPart, null, () => [
        h(NumberInput as ArkPart, { "aria-label": "Enter the amount", defaultValue: "10" }, () =>
          h(numberInputParts.Input),
        ),
        h(InputGroup.Addon as ArkPart, null, () => h(InputGroup.Text as ArkPart, null, () => "€")),
        h(InputGroup.Addon as ArkPart, { align: "inline-end" }, () =>
          h(InputGroup.Text as ArkPart, null, () => "EUR"),
        ),
      ]);
  },
});
