import type { ButtonProps } from "@pisagor/vue";
import { Button } from "@pisagor/vue";
import { defineComponent, h, type VNodeChild } from "vue";
import { useFormContext } from "../contexts";

type ArkPart = Parameters<typeof h>[0];

export const SubmitButton = defineComponent({
  inheritAttrs: false,
  name: "SubmitButton",
  props: {
    isLoading: { default: undefined, type: Boolean },
  },
  setup(props, { attrs, slots }) {
    const form = useFormContext();

    return () =>
      h(
        form.Subscribe as ArkPart,
        { selector: (state: { isSubmitting: boolean }) => state.isSubmitting },
        {
          default: (isSubmitting: boolean) =>
            h(
              Button as ArkPart,
              {
                ...(attrs as ButtonProps),
                isLoading: props.isLoading ?? isSubmitting,
                type: "submit",
              },
              () => slots.default?.() as VNodeChild,
            ),
        },
      );
  },
});
