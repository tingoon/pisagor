import { Field, Input } from "@pisagor/vue";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const FormGrid = defineComponent({
  inheritAttrs: false,
  name: "FormGrid",
  setup() {
    return () =>
      h(Field as ArkPart, null, () =>
        h(Field.Group as ArkPart, { class: "grid grid-cols-2" }, () => [
          h(Field as ArkPart, null, () => [
            h(Field.Label as ArkPart, null, () => "First name"),
            h(Input as ArkPart, { placeholder: "John" }),
          ]),
          h(Field as ArkPart, null, () => [
            h(Field.Label as ArkPart, null, () => "Last name"),
            h(Input as ArkPart, { placeholder: "Doe" }),
          ]),
          h(Field as ArkPart, { class: "col-span-2" }, () => [
            h(Field.Label as ArkPart, null, () => "Address"),
            h(Input as ArkPart, { placeholder: "123 Main St" }),
          ]),
        ]),
      );
  },
});
