import { PhGlobe } from "@phosphor-icons/vue";
import { cn } from "@pisagor/utils";
import { Button } from "@pisagor/vue/button";
import { Card } from "@pisagor/vue/card";
import { Field } from "@pisagor/vue/field";
import { Input } from "@pisagor/vue/input";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

export interface LoginCardProps {
  class?: unknown;
  primaryActionLabel?: string;
}

export const LoginCard = defineComponent({
  inheritAttrs: false,
  name: "LoginCard",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    primaryActionLabel: { default: "Send one-time code", type: String },
  },
  setup(props) {
    return () =>
      h(Card as ArkPart, { class: cn("w-full", props.class) }, () => [
        h(
          Card.Header as ArkPart,
          {
            description: "Enter your email and check your inbox",
            title: "Sign in to your account",
          },
          () =>
            h(Card.Action as ArkPart, null, () =>
              h(Button as ArkPart, { variant: "link" }, () => "Sign up"),
            ),
        ),
        h(Card.Content as ArkPart, null, () => [
          h(Field.Set as ArkPart, null, () =>
            h(Field as ArkPart, null, () => [
              h(Field.Label as ArkPart, null, () => "Email"),
              h(Input as ArkPart, { placeholder: "john.doe@example.com" }),
            ]),
          ),
        ]),
        h(Card.Footer as ArkPart, { class: "flex-col" }, () => [
          h(
            Button as ArkPart,
            { class: "w-full", size: "lg", type: "button" },
            () => props.primaryActionLabel,
          ),
          h(
            Button as ArkPart,
            { class: "w-full", size: "lg", type: "button", variant: "outline" },
            () => [h(PhGlobe as ArkPart, { "aria-hidden": true }), "Sign in with Google"],
          ),
        ]),
      ]);
  },
});
