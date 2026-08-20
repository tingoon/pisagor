import { ark } from "@ark-ui/vue/factory";
import { aspectRatioVariants } from "@pisagor/styles/ui/aspect-ratio";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const AspectRatio = defineComponent({
  inheritAttrs: false,
  name: "AspectRatio",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(aspectRatioVariants(), props.class),
          "data-part": "root",
          "data-scope": "aspect-ratio",
          "data-testid": props.testId,
        },
        slots,
      );
  },
});
// #endregion
