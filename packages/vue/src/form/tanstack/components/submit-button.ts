import { defineComponent, h, type VNodeChild } from "vue";
import type { ButtonProps } from "../../../components";
import { Button } from "../../../components";
import { useFormContext } from "../contexts";

type ArkPart = Parameters<typeof h>[0];

export const SubmitButton = defineComponent({
  inheritAttrs: false,
  name: "SubmitButton",
  props: {
    loading: { default: undefined, type: Boolean },
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
                loading: props.loading ?? isSubmitting,
                type: "submit",
              },
              () => slots.default?.() as VNodeChild,
            ),
        },
      );
  },
});
