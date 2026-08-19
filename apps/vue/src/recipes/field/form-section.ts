import { Button } from "@pisagor/vue/button";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { defineComponent, h } from "vue";

type ArkPart = Parameters<typeof h>[0];

export const FormSection = defineComponent({
  inheritAttrs: false,
  name: "FormSection",
  setup() {
    return () =>
      h(Field as ArkPart, null, () => [
        h(Field as ArkPart, null, () => [
          h(Field.Label as ArkPart, null, () => "Name"),
          h(Input as ArkPart, { placeholder: "First name" }),
        ]),
        h(Field as ArkPart, null, () => [
          h(Field.Label as ArkPart, null, () => "Email"),
          h(Input as ArkPart, { placeholder: "you@example.com", type: "email" }),
          h(Field.Description as ArkPart, null, () => "We'll use this email to contact you"),
        ]),
        h(Field as ArkPart, { orientation: "horizontal", reverse: true }, () => [
          h(Button as ArkPart, { type: "button" }, () => "Submit"),
          h(Button as ArkPart, { type: "button", variant: "outline" }, () => "Reset"),
        ]),
      ]);
  },
});
